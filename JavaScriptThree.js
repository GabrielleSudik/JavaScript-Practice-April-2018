document.write("<br>");

document. write("This lesson is about passing multiple parameters to a function.<br>");
document.write("<br>");

function firstF(name, age){
  document.write("This is the first function in this lesson.<br>");
  document.write("My name is " + name + ".<br>");
  document.write("My age is " + age + " months old.<br>");
}

firstF("Compy54786");
firstF("Little Red Laptop");

var name = "LRL"
var age = 3
firstF(name, age);

document.write("<br>");
document.write("This lesson is functions that return something.<br>");
document.write("<br>");

function secondF() {
  return "This is the return value.<br>";
}

document.write(secondF());
//the returned value won't print on its own. you need to order it to print.

function thirdF(a,b) {
  return a+b;
}

document.write(thirdF(2,3));
document.write("<br>");
document.write("<br>");

function fourthF(){
  document.write("Calling a function from another function.<br>");
}

function fifthF(){
  document.write("This one too.<br>");
}

function start(){
  fourthF();
  fifthF();
}

start();