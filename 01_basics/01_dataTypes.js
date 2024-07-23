let a = null;
console.log(typeof a);
a="Saad";
console.log(typeof a);
a=18;
console.log(typeof a);

let b;
console.log(typeof b);
b="Saad";
console.log(typeof b);
b=18;
console.log(typeof b);

// number, string, boolean, undefined, object, symbol (will discuss in detail later)

let sym1 = Symbol("Saad");
console.log(sym1, typeof sym1);
sym1 = "Amin";
console.log(sym1, typeof sym1);

let sym11 = Symbol("Saad");
let sym22 = Symbol("Saad");
console.log(sym11==sym22);




