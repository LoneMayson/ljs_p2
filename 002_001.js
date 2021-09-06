// introduction to browser events
let log = console.log

// handler may be set 
// 1. in attrbute
// 2. in prop
// 3. by addEventListener: more than one handler

function clickButton(event)
{
    alert(`this: ${this}`);
    alert(`event: ${event}`);
}

var elem = document.getElementById("button2");
elem.onclick = clickButton;

var elem = document.getElementById("button3");
elem.addEventListener("click", clickButton);

class EventHandler
{
    handleEvent(event)
    {
        var elem = document.getElementById("button4-info");
        var res = "";
        res += `type: ${event.type} \n`;
        res += `currentTarget: ${event.currentTarget} \n`;
        res += `clientX: ${event.clientX} \n`;
        res += `clientY: ${event.clientY} \n`;
        elem.innerText = res;
    }
}

var elem = document.getElementById("button4");
var eventHandler = new EventHandler();
elem.addEventListener("mousedown", eventHandler);
elem.addEventListener("mouseup", eventHandler);