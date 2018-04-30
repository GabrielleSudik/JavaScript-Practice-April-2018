document.write("<br>");

//string functions
var text = "It is a truth universally acknowledged... truth or dare";
display = text.indexOf("truth");
document.write(display); //prints index # of start of string part. ie -- 8.
document.write("<br>");
display2 = text.lastIndexOf("truth");
document.write(display2); //prints index # of start of last/final occurance of that part of the string
document.write("<br>");

display3 = text.slice(8,13); //slice cuts stuff out. starts with first #, ends with last # minus 1. ie, 13 is where you resume not slicing.
document.write(display3);
document.write("<br>");
display4 = text.slice(14, 26);
document.write(display4);
document.write("<br>");
display5 = text.slice(-4); //to cut off the end, use negative with no "resume" #. Or negative in both places to remove NEAR the end.
document.write(display5);
document.write("<br>");

display6 = text.substring(8,13); //substring is like slice except ... well, not sure.
document.write(display6);
document.write("<br>");

display7 = text.toUpperCase();
document.write(display7);
document.write("<br>");
display8 = text.toLowerCase();
document.write(display8);
document.write("<br>");

display9 = text.charAt(8); //finds the character at place 8 in the string.
document.write(display9);
document.write("<br>");

var num = 17625;
display10 = text.concat(" whatever you want here, if anything ", num);
document.write(display10);
document.write("<br>");


