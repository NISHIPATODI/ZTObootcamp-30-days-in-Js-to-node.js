
/*console.log("hello");
var div1 = document.getElementsByClassName("div1");

var text = "<h1>hello</h1>";
div1. innerHTML= text;
var element;
element= document.title;
console.log(element);*/

//console.log(document);

const head2 =document.getElementById("head");
head2.style.color="red";
head2.style.backgroundColor="Black";


console.log(head2);

//const list =document.getElementById("list");
//console.log(list.textContent);
//list.innerHTML="hi there";
//list.textContent="<h1>hi there</h1>";
//console.log(list.innerHTML);

//const list =document.querySelector("#list");

//console.log(list);

//document.getElementById("demo").innerHTML = "Hello World!";
       
/*const li =document.querySelectorAll("li");

console.log(li);
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor="blue";

}*/


var list2 =document.getElementById("list2");
list2.style.backgroundColor="blue";

console.log(list2);


var btn=document.getElementsByClassName("btn");

/*btn.style.backgroundColor="blue";
btn.onClick=()=>{
    btn.style.css="background-color:brown; color:red;"

}*/

/*sub.onmouseover=()=>{
    //head2.style.css="background-color:transparent;color:green;"
    document.getElementById("pa").style.color = "red";
}*/



    //document.getElementById("sub").onclick = function() {click()};
    document.getElementById("sub").onmouseover = function() {mouseOver()};
document.getElementById("sub").onmouseout = function() {mouseOut()};
//document.getElementById("sub").onclick = function() {myFunction()};

document.getElementById("sub").onclick = function() {lastclick()};


function lastclick() {
    document.getElementById("pa").innerHTML = "Hello World";
  }
  
function myFunction() {
  document.getElementById("para").innerHTML = "YOU CLICKED ME!";
}

/*function click() {
    document.getElementById("para").style.css = "background-color:pink;color:green"
    document.getElementById("click").innerHTML = "Hello World!";

}*/
  

function mouseOver() {
  document.getElementById("head").style.color = "yellow";
  document.getElementById("click").innerHTML = "registered";

}

function mouseOut() {
  document.getElementById("head").style.color = "green";
}


const print= document.createElement("li");
const text = document.createTextNode("blog");

print.appendChild(text);
console.log(print);
list2.appendChild(print);

list2.insertBefore(print,list2.children[0]);
list2.removeChild(print);