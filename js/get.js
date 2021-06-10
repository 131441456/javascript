// document.write("hello")


var element;
// element = document.body;// title,head also check
// console.log(element);

// element = document.getElementById("a").innerText;

// element = document.getElementById("a").innerHTML;
// element = document.getElementById("a").getAttribute("style");
element = document.getElementById("a").getAttributeNode("style");
element = document.getElementById("a").attributes[0];
document.getElementById("a").setAttribute("style","border:10px dotted red");

document.getElementById("a").removeAttribute("style");




console.log(element);