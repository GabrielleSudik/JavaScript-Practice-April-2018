document.write("<br>");

//a lot of this code isn't working. not sure why. it seems to match the tutorial. :(

//setInterval will execute the block continuously. not yet working.

function autoFun(){
  document.write("Why are these not working?<br/>");
}

//autoFun();

/*
setInterval(function(){autoFun();},3000);
*/


//setTmeOut will execute the block only once. this works.


var st1 = setTimeout(function(){autoFun();},1000);

function stop(){
  clearTimeout(st1);
}

//clearInterval(nameOfVariableHere);
//probably more useful than the other, because it will stop something that keeps running.
//but I can't get most of this to work, so... :(


