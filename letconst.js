const PI = 3.14;
PI = 42;

/*

Difference between var and let

let can be reassigned but not redeclared unlike var.
let is not added to the window like var is.
let is scoped to the codeblock, not just the function they are inside of like var.
var can be hoisted while let can not

Difference between var and const

var can be redeclared while const can not be redeclared
const is block-scoped while var is scoped to the function it is inside of
var can be hoisted while const can not

Difference between let and const

let can be reassigned but const can not be reassigned or redeclared
a value has to be assigned when declaring with const but not with let

Hoisting

When code is compiled, the variable declarations declared with var as the keyword
(the declaration portion) is run first before the initialization. It is made first
without a value which is why it can return as undefined since it exists, but with no assigned
value.


*/ 