FormatPhone
---

Version: 1.1.0<br />
March 19, 2015<br />
License: The MIT License (MIT)<br />
Author: Johan Cyprich (jcyprich@live.com)<br />

---

JavaScript function that formats a phone number according a user selected style. The function
extracts all of the numbers from the tel string and tries to build a phone number. If the
number of digits extracted is not 10, then the function will return an error.

**Function Parameters:**
tel (in) - phone number to be formatted<br />
style (in) - the format to write the phone number as. The options for style are the following:

0	No formatting<br />
1	###-###-####<br />
2	###.###.####<br />
3	### ### ####<br />
4	(###) ###-####<br />
5	(###) ###.####<br />
6	(###) ### ####<br />
7	+??#-###-###-####<br />
8	+??# (###) ###-####<br />
9	+??# (###) ### ####<br />
10	+??# ### ### ####<br />
11	+??#.###.###.####

  where # is a number<br />
        ? is an optional number

**Return Value:**
If a valid phone number was created, it will be returned as a string. Otherwise,
the string returned will be NaN is phone number could not be parsed. If an empty string is
being parsed, the function will exit and return the empty string instead of NaN.


**How to Install Script in uPlan**

1. Open uPlan.<br />
2. Right click on Functions and select New Function -> JavaScript -> String.<br />
3. Name the function FormatPhone.<br />
4. Right click on the function and select New Parameter -> String.<br />
5. Enter tel for variable name.<br />
6. Right click on the function again and select New Parameter -> Number.<br />
7. Enter style for the variable name.<br />
8. Copy and paste JavaScript code from XMPie/FormatPhone.js into the FormatPhone function in uPlan (you don't need to include the comments).


**Usage**

In the ADOR object, use the function as

     FormatPhone (@{var_phone}, @{var_style})

	 
**Example**

See FormatPhone.plan for an example.
