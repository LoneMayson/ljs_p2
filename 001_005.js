// basic dom node properties
let log = console.log

// DOM node hierarchy
// EventTarget -> Node
// Node -> Text, Element, Comment
// Element -> HTMLElement, SVGElement
// HTMLElement -> HTMLHTMLElement, HTMLHeadElement, HTMLBodyElement, HTMLInputElement, etc.

log(document.constructor.name); // HTMLDocument
log(document.documentElement.constructor.name); // HTMLHTMLElement
log(document.head.constructor.name); // HTMLHeadElement
log(document.body.constructor.name); // HTMLBodyElement

var elem = document.getElementById("USA");
// in dev ins the output is different
console.log(elem); // div#USA.country
console.dir(elem); // div#USA.country

// DOM classes in the specification are described by IDL

function logNodeInfo(node)
{
    log(`node: ${node}`);
    log(`nodeName: ${node.nodeName}`);
    log(`tagName: ${node.tagName}`);
    log(`nodeType: ${node.nodeType}`);
    log(`nodeValue ${node.nodeValue}`);
    log(`data: ${node.data}`);
}
var nodes = document.body.childNodes;
for(var node of nodes);

// Examples of nodes:

// node: [object HTMLHtmlElement]
// nodeName: HTML 
// tagName: HTML 
// nodeType: 1

// node: [object HTMLDivElement]
// nodeName: DIV
// tagName: DIV 
// nodeType: 1
// nodeValue: null
// data: undefined

// node: [object Text]
// nodeName: #text
// tagName: undefined
// nodeType: 3
// nodeValue:
//      text
//
// data:
//      text
//

// node: [object Comment]
// nodeName: #comment 
// tagName: undefined 
// nodeType: 8
// nodeValue: comment
// data: comment

// node: [object HTMLDocument]
// nodeName: #document 
// tagName: undefined 
// nodeType: 9

var elem = document.getElementById("Washington");
elem.innerHTML = "Washington, DC";
log(elem.outerHTML); // <div id="Washington" class="city">Washington, DC</div>

// modifying outerHTML creates new content instead of old

var elem = document.getElementById("USA");
// USA
//      Wasgington, DC
log(elem.textContent);

// it is safe to write text data by textContent cuz it interprets all like text and not html