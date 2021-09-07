// dispatching events
let log = console.log

// Event constructor:
// new Event(type[, options])
// options: bubbles, canselable, composed false by default

// if event is artificial then event.isTrusted = false

function showEvent(event)
{
    let msg = "";
    msg += "event.target: " + event.target + "\n";
    msg += "event.target.id: " + event.target.id + "\n";
    msg += "event.isTrusted: " + event.isTrusted + "\n";
    alert(msg);
}

function button1(event)
{
    showEvent(event);
}

function clickButton1(event)
{
    let elem = document.getElementById("button1");
    elem.dispatchEvent(new Event("click"))
}

function sendHello(event)
{
    let elem = document.getElementById("helloSender");
    elem.dispatchEvent(new CustomEvent("hello", { bubbles: true, }))
}

function helloHandler(event)
{
    showEvent(event);
}

function hideRabbit(event)
{
    let elem = document.getElementById("rabbit");
    if (elem.dispatchEvent(new CustomEvent("hide", { cancelable: true, })))
        elem.hidden = true;
    else
        alert("prevented");
}

document.body.addEventListener("hello", helloHandler);

var elem = document.getElementById("rabbit");
elem.addEventListener("hide", function(event)
    {
        if (confirm("prevent default?"))
            event.preventDefault();
        
    });