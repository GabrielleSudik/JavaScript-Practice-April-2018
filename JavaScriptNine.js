//document.write("<br>");

//math object

/*
document.write(Math.PI);
document.write("<br>");
document.write(Math.E);
document.write("<br>");

var num = prompt("Enter a number", "number");
var answer = Math.sqrt(num);
alert("The square root of " + num + " is " + answer);
document.write("<br>");
*/

//there are other methods too. sin, cos, whatever

//date object

function exe(){
  document.write("Example text ");
}
//setInterval("exe()", 1000);
//this is STILL not working. prints once only.

function printTime(){
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  document.write(hours+":"+minutes+":"+seconds+"<br/>");
}

setInterval("printTime()", 1000);
//once again, doesn't work. it prints once only.

//anyway, you can find other date & time methods online.