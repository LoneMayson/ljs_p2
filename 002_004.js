// default browser action
let log = console.log

// to prevent default action we may:
// 1. use event.preventDefault
// 2. return false from handler

// if we return false, other events are not handled
// i.e. onmousedown -> onfocus

// addEventListener parameter 'options' has option 'passive'
// if true this means handler won't call preventDefault

// if default action was prevented event.defaultPrevented becomes true

// thus in case of canseling default action and having event propagation we may cansel event propagation:
// 1. event.stopPropagation
// 2. event.preventDefault + if event.defaultPrevented return