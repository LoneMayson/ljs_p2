// coordinates
let log = console.log

function showMetrics()
{
    var elem = document.getElementById("elem");
    var res = "";
    var coords = elem.getBoundingClientRect();
    res += "x: " + coords.x + "\n";
    res += "y: " + coords.y + "\n";
    res += "width: " + coords.width + "\n";
    res += "height: " + coords.height + "\n";
    res += "top: " + coords.top + "\n";
    res += "left: " + coords.left + "\n";
    res += "right: " + coords.right + "\n";
    res += "bottom: " + coords.bottom + "\n";
    var elem = document.getElementById("metrics");
    elem.innerText = res;
}

// kt: document.elementFromPoint(x,y)

function showMessage()
{
    var elem = document.getElementById("buttonShowMessage");
    var coords = elem.getBoundingClientRect();

    var message = document.createElement("div");
    message.style.cssText = "position: absolute; color: red";
    message.style.left = coords.left + window.scrollX + "px";
    message.style.top = coords.bottom  + window.scrollY + "px";

    message.innerHTML = "message";

    document.body.append(message);
}