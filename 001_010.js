// size and scroll window
let log = console.log

function showMetrics()
{
    var html = document.documentElement;
    var res = "";
    res += "window.innerWidth: " + window.innerWidth + "\n";
    res += "window.innerHeight: " + window.innerHeight + "\n";
    res += "html.clientWidth: " + html.clientWidth + "\n";
    res += "html.clientHeight: " + html.clientHeight + "\n";
    
    var elem = document.getElementById("metrics");
    elem.innerText = res;
}