function akanName (){
  var welcome = document.getElementById("welcome").value;
  var name = document.getElementById("name").value;
  var birthDate = document.getElementById("date").value;
  var gender= document.getElementById("gender").value;
  var errorMessage = document.getElementById("errormessage");
  var text;
  errorMessage.style.padding = "10px";
  if (name.length<1) {
    text = "Please enter name"
    errorMessage.innerHTML = text;
    return false;
  }
  else {
    welcome.innerHTML="welcome" +name.value
  }
  if (birthDate != NaN)
  {
    return true;
  }
  else {
    text = "Please enter a valid date"
    errorMessage.innerHTML = text
    return false;
  }
  

  
}
  