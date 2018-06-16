
//variable scopes


//Functions
function add(x,y){
  
  var total = x+y;

  return total;
}

function subtract(x,y)
{
  var total = x -y;
  return total;
}

function multiply(x,y)
{
  var total = x*y;
  return total;
}

function divide(x,y)
{
  var total = x/y;
  return total;
}

console.log(add(20,10));
console.log(subtract(20,10));
console.log(multiply(20,10));
console.log(divide(20,10));

//Define a global variable
//Change it's value inside a function 
//Print out that value outside of that function

var global = 80;

function change(global)
{
  global = 70;
  return global;
}

console.log(change(global));

document.createElement("div");

/*for(var i =0;i<1000;i++)
{
  var div = document.createElement("div");
  div.classList.add("orange");    //adding to list of classes that div has
  div.innerHTML = "Hi, I am a div!";

  var body = document.getElementsByTagName("body")[0];
  body.appendChild(div);
} 
*/

var div = window.document.createElement("div");
div.classList.add("aliceblue");    //adding to list of classes that div has
div.innerHTML = "Hi, I am a div!";

var body = document.getElementsByTagName("body")[0]; //pushes into HTML
body.appendChild(div);

//Event Listeners 
div.addEventListener("click", function () { //take in 2 arguments - 1 is event, 1 is function you want to run
  alert("Hey! You just clicked the Document!");

});   


