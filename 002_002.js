// bubbling and capturing
let log = console.log

function bubble(event)
{
    var elem = document.getElementById("bubble-info");
    var res = "";
    res += `type: ${event.type} \n`;
    res += `target: ${event.target} \n`;
    res += `currentTarget: ${event.currentTarget} \n`; // it's 'this'
    elem.innerText += res;
}

function clearBubbleInfo()
{
    var elem = document.getElementById("bubble-info");
    elem.innerText = "";
}

// kt: event.stopPropagation, event.stopImmediatePropagation
// kt: capture = true