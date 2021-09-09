// keyboard events
let log = console.log

let kinput = document.getElementById("kinput");
let area = document.getElementById("area");
kinput.onkeydown = function(event)
{
    let text = "key: " + event.key + " code: " + event.code + "\n";
    area.value += text;
}