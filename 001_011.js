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