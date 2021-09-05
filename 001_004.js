// searching elements dom
let log = console.log

var elem = document.getElementById("Washington");
elem.style.background = "yellow";

var elem = document.querySelector("li");
log(elem.innerHTML); // chapter 1

var elem = document.querySelector("li > b");
log(elem.innerHTML); // chapter 3

var elems = document.querySelectorAll("li"); // static collection!
for(elem of elems)
    log(elem.innerHTML);
// chapter 1
// chapter 2
//             <b>chapter 3</b>

for(var elem of document.body.children)
{
    if (elem.matches("div"))
        log(elem.innerText);
}
// USA
// Washington

var elem = document.querySelector(".city");
elem = elem.closest(".country");
log(elem.id); // USA

var elems = document.getElementsByClassName("country"); // live collection!
log(elems.length); // 1
var elems = document.getElementsByTagName("div"); // live collection!
log(elems.length); // 2