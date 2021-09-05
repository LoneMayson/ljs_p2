// modifying document
let log = console.log

var node = document.createTextNode("Text node example");
log(node); // #text
var elem = document.getElementById("firstDiv");
elem.append(node);
log(elem.innerHTML); // Text node example

var elem = document.createElement("div");
elem.innerHTML = "<strong>div example</strong>";
document.body.append(elem);

// methods:
// append to the end
// prepend first
// before
// after
// replaceWith

// text is inserted as raw text
document.body.append("<strong>raw text</strong>");

// 3 methods document.body.insertAdjacentHTML, Text, Elem
document.body.insertAdjacentHTML("beforeend", "<br/>");
document.body.insertAdjacentText("beforeend", "<br/>");
var elem = document.createElement("div");
elem.innerHTML = "<strong>Adjacent</strong>";
document.body.insertAdjacentElement("beforeend", elem);

// removing and moving
var elem = document.createElement("div");
elem.innerHTML = "New element"
document.body.append(elem);
//moving
document.body.before(elem);
//removing
elem.remove();

//cloning
var elem = document.createElement("div");
elem.innerHTML = "<strong>This will be cloned</strong>"
document.body.append(elem);
clone = elem.cloneNode(true);
elem.after(clone);

// two ways of appending much elems
var ul = document.createElement("ul");
document.body.append(ul);

var getListContent = function()
{
    var result = new DocumentFragment();
    for(var i = 1; i <= 3; i++)
    {
        var li = document.createElement("li");
        li.append("chapter" + i);
        // li.innerHTML
        // li.innerText
        // li.outerText
        // li.textContent
        result.append(li);
    }
    return result;
}

ul.append(getListContent());

var getListContent = function()
{
    var result = [];
    for(var i = 1; i <= 3; i++)
    {
        var li = document.createElement("li");
        li.append("chapter" + i);
        result.push(li);
    }
    return result;
}

ul.append(...getListContent());