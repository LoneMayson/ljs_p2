// size and scroll
let log = console.log

function showMetrics()
{
    var elem = document.getElementById("example");
    var res = "";
    var props = ["offsetParent", "offsetLeft", "offsetTop", "offsetWidth", "offsetHeight",
        "clientLeft", "clientTop", "clientWidth", "clientHeight", "scrollWidth", "scrollHeight",
        "scrollLeft", "scrollTop"];
    for(var prop of props)
    {
        res += prop + ": " + elem[prop] + "\n";
    }
    
    var elem = document.getElementById("metrics");
    elem.innerText = res;
}