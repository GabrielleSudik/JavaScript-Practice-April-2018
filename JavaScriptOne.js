
document.write("Hello, Sailor.<br>");
document.write("Hello, Dolly.<br>");
document.write("Hello, Kitty.<br>");

document.write(4+9);
document.write("<br>");
name = "Gaby";
document.write(name);
document.write("<br>");
anotherName = 76543;
document.write(anotherName);
document.write("<br>");

document.write("<h2>How to add html tags and text with JS</h2>");
document.write("<h3>Put the html tags within the string quotes.</h3>");
document.write("<h4>Because you're creating HTML and all that entails.</h3>");
document.write("<h4>I reckon you add ALL html tags this way, including css, class, id, images, divs, rows, etc, etc...</h4>");

//variables. don't need variable type.

num1 = 5;
num2 = 2;
document.write("total = " + num1+num2 + "<br>");
document.write("total = " + (num1+num2) + "<br>");
//heh, be careful about conflating strings and non-strings!
firstName = "Gaby";
lastName = "Sudik";
document.write(firstName + " " + lastName);
document.write("<br>");


//pop-up boxes. (coded out because it's slowing down your lessons)

//alert("Sign-in required");
//userName = prompt("Type your name", "your name");
//document.write("Hello, <b>" + userName + "</b>. Welcome!<br>");

num3 = 17;
num4 = 3;
document.write(num3%num4);
document.write("<br>");
document.write(num4 + "<br>");
num4 = num3;
document.write(num4 + "<br>");
document.write((num1==num2) + "<br>");
num5 = "5";
document.write(num1 == num5);  //prints true
document.write(num1 === num5);  //prints false
document.write("<br>");

if ((firstName == "Gaby" && lastName == "Sudik") || 
  (firstName == "Gaby" || lastName == "Sudik")){
  document.write("I know you!<br>");
}
else {document.write("Who ARE you?<br>");}

if (num1 < num2){
  document.write("First number is smaller than second.<br>");
  }
else if (num1 > num2){
  document.write("Second number is bigger.<br>");
  }
else {document.write("Numbers are the same.<br>");}

var age = 33;
var sex = "male";

if (age >= 40) {
  if (sex == "female"){
    document.write("You are most awesome.<br>");
    }
    else {document.write("You are second-most awesome.<br>");
    }
  }
  else {document.write("You are too young to be awesome.<br>");
}

var car = "Packard";
switch(car){
  case "Chevy" : document.write("The car is a Chevy");
  break;
  case "Ford" : document.write("The car is a Ford");
  break;
  default : document.write("There is no car");
}
document.write("<br>");

for(i=0; i<7; i++) {
  document.write((i+1) + " I love onions. ");
}
document.write("<br>");

for(i=1; i<7; i++) {
  for (j=1; j<7; j++) {
    document.write(i + " " + (i*j) + " ");
  }
}
document.write("<br>");

var x=1;
while (x <= 10){
  document.write(x + " ");
  x++
}
document.write("<br>");

var y = 15; //remember this will run at least one time. even if condition is "wrong"
do{
  document.write( y + " It's a do-while loop!<br>")
  y++;
}
while (y <=10);


