document.write("<br>");

for(i=1; i <=10; i++){
  if(i==4) {continue} //skips whatever is here
  if(i==8) {break}    //stops here
  document.write("The number is : " + i + "<br>");
}

document.write("<br>");

var girl = "Sara";
function girlName(){
  document.write(girl + "<br>");
}

function girlName2(){
  girl = "Mary";
  document.write(girl + "<br>");
}

girlName();
document.write(girl + "<br>");
girlName2();
document.write(girl + "<br>");
//see how Mary will print from that last line, even though it's inside the block?
//scope is pretty loose in JS.

document.write("<br>");

//event handler lesson: check the html doc.
//it's the <form> thing about multiple alerts.
