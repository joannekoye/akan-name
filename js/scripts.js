function akanName (){
  var dd= parseInt(document.getElementById("birth-day").value)
  var mm= parseInt(document.getElementById("birth-month").value)
  var yyyy= parseInt(document.getElementById("birth-year").value)

  var cc= parseInt((yyyy/100)+ 1)
  var yy= ((yyyy/100)-Math.floor(yyyy/100))*100

  var result = parseInt((((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7)
  var maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
  var femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
  var daysOfWeek = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  var gender = document.getElementsByName("gender").value
  
  if (mm<1 || mm>12) {
    alert("Invalid Month!");

  }
  else if (dd<1||dd>31 || mm===2 && dd>29) {
    alert("Invalid date!")
  }
  else {
    alert("Input Data please")
  }
  switch(gender){
    case gender = "Male" :
      switch (result){
        case(0):
          document.getElementById("result").innerHTML = 
      }
  }




}
  