// dom navigation
let log = console.log

log(document.documentElement); // html
log(document.head); // head
log(document.body); // body
log(Object.toString(document.documentElement)); // function Object() { [native code] }
log(Object.toString(document.head)); // function Object() { [native code] }
log(Object.toString(document.body)); // function Object() { [native code] }

var html = document.documentElement;
var body = document.body;

log(html.parentNode); // #document

log(html.childNodes); // NodeList(4) [#comment, head, #text, body]
// it is a DOM collections
// DOM collections are "live"

log(html.firstChild); // #comment
log(html.lastChild); // body

log(body.parentNode); // html
log(body.previousSibling); // #text
log(body.nextSibling); // null

log(html.parentElement); // null

log(html.children); // HTMLCollection(2) [head, body]

log(html.firstElementChild); // head
log(html.lastElementChild); // body

log(body.parentElement); // html
log(body.previousElementSibling); // head
log(body.nextElementSibling); // null


