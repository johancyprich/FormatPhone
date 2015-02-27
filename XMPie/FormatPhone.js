  var error = 0;                   // is phone number valid?
  var result;                      // final parsed result of phone number 
  var len = tel.length;            // length of phone number
  var parsedTel = "";              // work variable for building parsed phone number
  var max = 10;                    // max number of digits allowed in phone number
  var ch;                          // single character in tel string
  var telPos;                      // position of tel after country code
  
  // If tel is an empty string, exit function and return empty string instead of NaN.
  
  if (tel == "")
    return "";
  
  // Extract numbers from tel string.
  
  for (i = 0; i <= len - 1; i++)
  { 
    ch = tel.charAt (i);
    
    // Add ch to parsedTel if its a number and not a space character.
    
    if (!isNaN (ch) && (ch != " "))
      parsedTel += ch;
  }
  
  // Check if length of tel is valid.
  
  len = parsedTel.length;
  
  if ((style == 7) || (style == 8) || (style == 9))            // tel with country code will have 11 to 13 digits
    error = ((len < 11) || (len > 13)) ? 1 : 0;
  
  else                                                         // phone number must have 10 digits
    error = (len != max) ? 1 : 0;
    
  // Format tel according to style.

  switch (style)
  {
    // Don't parse the tel string. Just return it.
    case 0 :
      result = tel;
      break;
      
    // ###-###-####
    case 1 :
      result = parsedTel.substr (0, 3) + "-" + parsedTel.substr (3, 3) + "-" + parsedTel.substr (6, 4);
      break;
    
    // ###.###.####
    case 2 :
      result = parsedTel.substr (0, 3) + "." + parsedTel.substr (3, 3) + "." + parsedTel.substr (6, 4);
      break;
      
    // ### ### ####
    case 3 :
      result = parsedTel.substr (0, 3) + " " + parsedTel.substr (3, 3) + " " + parsedTel.substr (6, 4);
      break;
      
    // (###) ###-####
    case 4 :
      result = "(" + parsedTel.substr (0, 3) + ") " + parsedTel.substr (3, 3) + "-" + parsedTel.substr (6, 4);
      break;
      
    // (###) ###.####
    case 5 :
      result = "(" + parsedTel.substr (0, 3) + ") " + parsedTel.substr (3, 3) + "." + parsedTel.substr (6, 4);
      break;
      
    // (###) ### ####
    case 6 :
      result = "(" + parsedTel.substr (0, 3) + ") " + parsedTel.substr (3, 3) + " " + parsedTel.substr (6, 4);
      break;
    
    // +??#-###-###-####
    case 7 :
      telPos = len - 10;
      result = "+" + parsedTel.substr (0, telPos) + "-" + parsedTel.substr (telPos, 3) + "-" + parsedTel.substr (telPos + 3, 3) + "-" + parsedTel.substr (telPos + 6, 4);
      break;
      
    // +??# (###) ###-####
    case 8 :
      telPos = len - 10;
      result = "+" + parsedTel.substr (0, telPos) + " (" + parsedTel.substr (telPos, 3) + ") " + parsedTel.substr (telPos + 3, 3) + "-" + parsedTel.substr (telPos + 6, 4);
      break;
      
    // +??# (###) ### ####
    case 9 :
      telPos = len - 10;
      result = "+" + parsedTel.substr (0, telPos) + " (" + parsedTel.substr (telPos, 3) + ") " + parsedTel.substr (telPos + 3, 3) + " " + parsedTel.substr (telPos + 6, 4);
      break;

    // +??# ### ### ####
    case 10 :
      telPos = len - 10;
      result = "+" + parsedTel.substr (0, telPos) + " " + parsedTel.substr (telPos, 3) + " " + parsedTel.substr (telPos + 3, 3) + " " + parsedTel.substr (telPos + 6, 4);
      break;
	  
    // Don't parse the tel string. Just return it.      
    default :
      result = tel;
  }
  
  // Return parsed number if tel was valid, or return NaN if tel could not be parsed.
  
  switch (error)
  {
    case 0 :
      return result;
      break;
      
    case 1 :
      return "NaN";
      break;
  }
