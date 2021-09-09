// mousmove moseover mouseout mouseenter mouseleave
let log = console.log

// mouseover
// event.target — on
// event.relatedTarget — from

// mouseover
// event.target — from
// event.relatedTarget — on

// relatedTarget can be null

// if there has been mouseover, mouseout follows always

// mouseout occurs from ancestor to descendant !
// mouseover on descendant bubbles on ancestor !

// mouseenter / mouseleave
// do not consider ancestors
// do not bubble