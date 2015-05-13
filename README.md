<h1>FormatPhone</h1>

Version: 1.2.0<br />
May 12, 2015<br />
License: The MIT License (MIT)<br />
Author: Johan Cyprich (jcyprich@live.com)<br />

<p>JavaScript function that formats a phone number according a user selected style. The function
extracts all of the numbers from the tel string and tries to build a phone number. If the
number of digits extracted is not 10, then the function will return an error.</p>

<h2>Function Parameters:</h2>

<p>
  <b>tel (in)</b> - phone number to be formatted<br />
  <b>style (in)</b> - the format to write the phone number as. The options for style are the following:
</p>

<table cellpadding=5>
  <tr>
    <th>style</th>
	<th>format</th>
  </tr>
  <tr>
    <td>0</td>
    <td>No formatting</td>
  </tr>
  <tr>
    <td>1</td>
    <td>###-###-####</td>
  </tr>
  <tr>
    <td>2</td>
    <td>###.###.####</td>
  </tr>
  <tr>
    <td>3</td>
    <td>### ### ####</td>
  </tr>
  <tr>
    <td>4</td>
    <td>(###) ###-####</td>
  </tr>
  <tr>
    <td>5</td>
    <td>(###) ###.####</td>
  </tr>
  <tr>
    <td>6</td>
    <td>(###) ### ####</td>
  </tr>
  <tr>
    <td>7</td>
    <td>+??#-###-###-####</td>
  </tr>
  <tr>
    <td>8</td>
    <td>+??# (###) ###-####</td>
  </tr>
  <tr>
    <td>9</td>
    <td>+??# (###) ### ####</td>
  </tr>
  <tr>
    <td>10</td>
    <td>+??# ### ### ####</td>
  </tr>
  <tr>
    <td>11</td>
    <td>+??#.###.###.####</td>
  </tr>
  <tr>
    <td>12</td>
    <td># ### ###-####</td>
  </tr>
</table>

<pre>
  where # is a number
        ? is an optional number
</pre>

<h2>Return Value:</h2>
<p>If a valid phone number was created, it will be returned as a string. Otherwise,
the string returned will be NaN is phone number could not be parsed. If an empty string is
being parsed, the function will exit and return the empty string instead of NaN.</p>


<h2>How to Install Script in uPlan</h2>

<ol>
  <li>Open uPlan.</li>
  <li>Right click on Functions and select New Function -> JavaScript -> String.</li>
  <li>Name the function FormatPhone.</li>
  <li>Right click on the function and select New Parameter -> String.</li>
  <li>Enter tel for variable name.</li>
  <li>Right click on the function again and select New Parameter -> Number.</li>
  <li>Enter style for the variable name.</li>
  <li>Copy and paste JavaScript code from XMPie/FormatPhone.js into the FormatPhone function in uPlan (you don't need to include the comments.</li>
</ol>


<h2>Usage</h2>

<p>In the ADOR object, use the function as</p>

<pre>
     FormatPhone (@{var_phone}, @{var_style})
</pre>
	 
<h2>Example</h2>

<p>See FormatPhone.plan for an example.</p>
