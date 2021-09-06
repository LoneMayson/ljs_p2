// event delegation
let log = console.log

let selectedTd;

function clickHandler(event)
{
    showEventInfo(event);
    let elem = event.target.closest("td");
    if(!elem)
        return;
    highlight(elem);
}

function highlight(elem)
{
    if (selectedTd)
        selectedTd.classList.remove("highlighted");
    selectedTd = elem;
    selectedTd.classList.add("highlighted");
}

function showEventInfo(event)
{
    var elem = document.getElementById("event-info");
    var res = "";
    res += `type: ${event.type} \n`;
    res += `target: ${event.target} \n`;
    res += `currentTarget: ${event.currentTarget} \n`; // it's 'this'
    res += "-------------------";
    elem.innerText += res;
}

function clearEventInfo()
{
    var elem = document.getElementById("event-info");
    elem.innerText = "";
}

var elem = document.getElementById("table");
elem.addEventListener("click", clickHandler);

class Menu
{
    handleEvent(event)
    {
        var method = event.target.dataset.action;
        this[method]();
    }
    save() { alert("save"); }
    open() { alert("open"); }
    new() { alert("new"); }
}
var elem = document.getElementById("menu");
var menu = new Menu();
elem.addEventListener("click", menu);