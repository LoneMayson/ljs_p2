// styles and classes
let log = console.log

// attribute class is className property
// there is also classList property with methods add, toggle, remove, contains

// attribute style is style property

// style props in HTML and JS
// background-color: backgroundColor
// -moz-border-radius: MozBorderRadius 
// dropping style prop:
// elem.style.display = ""

// we write style="..." in HTML
// in JS we can write style.cssText = "..."
// or like this:
// elem.setAttribute("style", '"color: red .."")

// style prop reads only from style attribute, not css!
// use getComputedStyle(elem [,pseudo]) method
// this method returns resolved style: i.e. font-size: 16px and not in %
