// dom attributes and properties
let log = console.log

var elem = document.getElementById("Washington");
for(var attr of elem.attributes)
    log(`name: ${attr.name} \t value: ${attr.value}`);
// name: id 	    value: Washington
// name: class 	    value: city
// name: capital    value: true // string

log(typeof elem.getAttribute("capital")); // string
elem.setAttribute("capital", true);
log(typeof elem.getAttribute("capital")); // string

// not always property change modifies attribute
var elem = document.querySelector("input");
log(elem.value); // Hello world
log(elem.getAttribute("value")); // Hello world
elem.setAttribute("value", "Hi to all");
log(elem.value); // Hi to all
log(elem.getAttribute("value")); // Hi to all
// Here prop changes
elem.value = "New value";
log(elem.value); // New value
// But attribute remains the same
log(elem.getAttribute("value")); // Hi to all
log("getch");

var elem = document.getElementById("link");
log(elem.href); // file:///E:/dev/ljs_p2/001_006.html#link
log(elem.getAttribute("href")); // #link

var elem = document.getElementById("Atlanta");
log(elem.style); // CSSStyleDeclaration ..
log(elem.getAttribute("style")); // color:aqua

var user = { name: "Alice", age: 18, };
for(var elem of document.querySelectorAll("[user-info]"))
{
    var fieldName = elem.getAttribute("user-info");
    elem.innerHTML = user[fieldName];
}

// dataset!
// all attributes which starts with "data-" are kept in a property dataset
var elem = document.getElementById("100500");
log(elem.dataset.info); // some value