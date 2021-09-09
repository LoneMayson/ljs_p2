// pointer events
let log = console.log

// pointer..
// pointercancel
// gotpointercapture
// lostpointercapture

// event
// pointerId
// pointerType
// isPrimary
// width
// height
// pressure
// tangentialPressure 
// tiltX, tiltY, twist

// css { touch-action: none }

// setPointerCapture
// releasePointerCapture

let text = document.getElementById("text");
let lastEventType;
let n = 1;

function logEvent(event)
{
    if (lastEventType == event.type)
    {
        n++;
        text.value = text.value.replace(/.*\n$/, `${event.type} * ${n}\n`);
        return;
    }
    lastEventType = event.type;
    n = 1;
    text.value += event.type + '\n';
    text.scrollTop = 1e9;
}

ball.onpointerdown = logEvent;
ball.onpointerup = logEvent;
ball.onpointermove = logEvent;
ball.onpointercancel = logEvent;