function akanName (){
  var dd= parseInt(document.getElementById("birth-day").value);
  var mm= parseInt(document.getElementById("birth-month").value);
  var yyyy= parseInt(document.getElementById("birth-year").value);

  var cc= Math.floor(yyyy/100);
  

  var result = parseInt( ( (cc/4) -2*cc-1) + ((5*yyyy/4) ) + ((26*(mm+1)/10)) + dd) % 7 ;
  var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
  var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
  var daysOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  var gender = document.getElementsByName("gender");
  if(gender.checked == true){
    gender = 'Male'
  }
  else {
    gender= 'Female'
  }
  
  if (dd<1||dd>31 || mm==2 && dd>29||mm<1 || mm>12) {
    alert("Invalid date input!")
  }
  else if (yyyy.toString().length<4||yyyy.toString().length>4){
    alert("Input Valid Year of Birth please")
  }
  else if(Math.round(result)==0 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[0]+". Your Akan name is " + maleNames[0];
  }
  else if(Math.round(result)==1 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[1]+". Your Akan name is " + maleNames[1];
  }
  else if(Math.round(result)==2 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[2]+". Your Akan name is " + maleNames[2];
  }
  else if(Math.round(result)==3 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[3]+". Your Akan name is " + maleNames[3];
  }
  else if(result==4 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[4]+". Your Akan name is " + maleNames[4];
  }
  else if(Math.round(result)==5 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[5]+". Your Akan name is " + maleNames[5];
  }
  else if(Math.round(result)==6 && gender==='Male'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[6]+". Your Akan name is " + maleNames[6];
  }
  else if(Math.round(result)==0 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[0]+". Your Akan name is " + femaleNames[0];
  }
  else if(Math.round(result)==1 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[1]+". Your Akan name is " + femaleNames[1];
  }
  else if(Math.round(result)==2 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[2]+". Your Akan name is " + femaleNames[2];
  }
  else if(Math.round(result)==3 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[3]+". Your Akan name is " + femaleNames[3];
  }
  else if(Math.round(result)==4 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[4]+". Your Akan name is " + femaleNames[4];
  }
  else if(Math.round(result)==5 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[5]+". Your Akan name is " + femaleNames[5];
  }
  else if(Math.round(result)==6 && gender==='Female'){
    document.getElementById("result").innerHTML = "You were born on a " +daysOfWeek[6]+". Your Akan name is " + femaleNames[6];
  }
  else{
    alert("error!")
  }
    

}
  