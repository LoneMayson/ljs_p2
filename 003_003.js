// mouse drag and drop
let log = console.log

// document.elementFromPoint(clientX, clientY)

let info = document.getElementById("info");

function writeInfo(prop, val)
{
    let txt = prop + ": " + val + "\n";
    info.innerHTML = info.innerHTML + txt;
}

let currentDroppable = null;

var ball = document.getElementById("ball");
ball.onmousedown = function(event)
{
    let rect = ball.getBoundingClientRect();
    let shiftX = event.clientX - rect.left;
    let shiftY = event.clientY - rect.top;

    writeInfo("shiftX", shiftX);
    writeInfo("shiftY", shiftY);

    ball.style.position = "absolute";
    ball.style.zIndex = 1000;
    //document.body.append(ball);

    writeInfo("event.pageX", event.pageX);
    writeInfo("event.pageY", event.pageY);

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY)
    {

        ball.style.left = pageX - shiftX + "px";
        ball.style.top = pageY - shiftY + "px";

    }

    function onMouseMove(event)
    {
        moveAt(event.pageX, event.pageY);
        ball.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        ball.hidden = false;

        if (!elemBelow)
            return;

        let droppableBelow = elemBelow.closest(".droppable");
        if (currentDroppable != droppableBelow)
        {
            if (currentDroppable)
            {
                leaveDroppable(currentDroppable);
            }
            currentDroppable = droppableBelow;
            if (currentDroppable)
            {
                enterDroppable(currentDroppable);
            }
        }
    }

    document.addEventListener("mousemove", onMouseMove);
    ball.onmouseup = function(event)
    {
        document.removeEventListener("mousemove", onMouseMove);
        ball.onmouseup = null;
    }
}

function enterDroppable(elem)
{
    elem.style.background = "pink";
}

function leaveDroppable(elem)
{
    elem.style.background = "";
}

ball.ondragstart = function()
{
    return false;
}

