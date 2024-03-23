//get element from html button by id. 
//get username
//get pasword
//convert passcode from string to number using parseInt
//get the datatypes
//document to browser the result


//get element from html button by id.
const buttonclick = document.getElementById ('buttoncheck')

buttoncheck.onclick = () => {


  const username = prompt ("ENTER USERNAME")
  const passcode = prompt ("Enter passcode");

  alert ('welcome...' + (username) + "......click ok to continue checking the DATATYPE of your informations");


  const convapss = (parseInt(passcode))

  const usernametype = ( typeof(username))
  const passcodetype = (typeof(convapss))

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = username + " \n.....THE DATATYPE  OF YOUR USERNAME IS ...\n"  + usernametype + "<br>"; 
  resultElement.innerHTML += ".....AND YOUR PASSCODE IS...\n" + passcodetype;

}




