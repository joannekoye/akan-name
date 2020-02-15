function akanName (){
  var dd= parseInt(document.getElementById("birth-day").value)
  var mm= parseInt(document.getElementById("birth-month").value)
  var yyyy= parseInt(document.getElementById("birth-year").value)

  var cc= parseInt((yyyy/100)+ 1)
  var yy= ((yyyy/100)-Math.floor(yyyy/100))*100

  var result = parseInt((((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7)
  



}
  