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
document.write("<br>");

var pcpart = new Array("monitor", "keyboard", "cpu", "mouse", "ram");
document.write(pcpart);
document.write("<br>");
pcpart.reverse();
document.write(pcpart);
document.write("<br>");
pcpart.push("harddrive", "webcam"); //push adds elements to array
document.write(pcpart);
document.write("<br>");
pcpart.sort();
document.write(pcpart);
document.write("<br>");

/*
var info = prompt("Enter your name here", "name");
document.write("Welcome, " + info);
document.write("<br>");
var friends = new Array(3);
for (i=0; i<3; i++){
  friends[i] = prompt("Enter friend's name here.", "name");
}
document.write(friends);
document.write("<br>");
*/
//you coded that part out to make re-running the page more efficient. it works.

var movies2 = new Array("The Thing", "The Blob", "It", "Fatal Attraction", "Get Out");
movies2.sort();
document.write(movies2);
document.write("<br>");
for (i = 0; i<movies2.length; i++){
  document.write(movies2[i] + "<br>");
}
movies2.push("Scream", "Swamp Thing");
movies2.sort();
for (i = 0; i<movies2.length; i++){
  document.write(movies2[i] + "<br>");
}
document.write("<br>");

//associative array
var gabrielle = new Array();
gabrielle["food"] = "sushi";
gabrielle["color"] = "brown";
gabrielle["book"] = "Dune";
//those have to be in quotes. you tried to remove them. no dice.
document.write("Gabrielle's favorite food is " + gabrielle["food"] + ".<br>");
document.write("Gabrielle's favorite color is " + gabrielle["color"] + ".<br>");
document.write("Gabrielle's favorite book is " + gabrielle["book"] + ".<br>");



