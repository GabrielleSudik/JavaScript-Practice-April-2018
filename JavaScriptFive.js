document.write("<br>");

//create an object called laptop
var laptop = new Object();

//properties
laptop.name = "Acer";
laptop.color = "red";
laptop.model = "Nitro 5";
laptop.owner = "Gabrielle";

document.write("The computer is a " + laptop.name + " " + laptop.model + ".");
document.write("<br>");

//another way to create an object:
var cat = {name: "Missy", breed: "tabby", sex: "female"};

document.write(cat.name + " is a " + cat.breed + ".");
document.write("<br>");

//random stuff:
var x = "Hello, my name is Crispy.";
var y = x.length;
var z = x.toUpperCase();
document.write(z);
document.write("<br>");
document.write("Length of the string is: " + y);
document.write("<br>");

function person (name, age){
  this.name = name;
  this.age = age;
}

var gaby = new person("Gaby", 43);
var iyad = new person("Iyad", 35);

document.write(gaby.name + " is " + gaby.age);
document.write("<br>");
document.write(iyad.name + " is " + iyad.age);