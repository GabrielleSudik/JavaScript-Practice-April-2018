document.write("<br>");

var people = new Array("Gaby", "Nicky", "Brian", "Charlie", "Daniel");
document.write(people);
document.write("<br>");
document.write(people[3]);
document.write("<br>");

var things = new Array(4);
things[0] = "pots";
things[1] = "pans";
things[2] = "forks";
things[3] = "knives";
document.write(things);
document.write("<br>");
document.write(things[1]);
document.write("<br>");

var boys = new Array("Jim", "Bob", "Scott", "Pete");
document.write(boys.length);
var girls = new Array("Julie", "Christian", "Lauren", "Michelle");
var both = boys.concat(girls);
document.write("<br>");
document.write(both);
document.write("<br>");
document.write(both[6]);
var both2 = boys.concat(girls[3]);
document.write("<br>");
document.write(both2);
document.write("<br>");

var movies = new Array("Raiders", "Working Girl", "The Fifth Element", "P&P");
var string1 = movies.join(); //join converts array into string
document.write(string1);
document.write("<br>");
document.write(movies[3]);
movies.pop(); //takes something off the back end
document.write("<br>");
document.write(movies[3]); //prints undefined because [3] doesn't exist anymore