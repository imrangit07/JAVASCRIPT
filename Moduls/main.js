import sum from "./add.js";
import {Mult as M,Div } from "./Named.js";

let ans = sum(60,90);
let mult = M(40,4);
let div = Div(40,4)

console.log(ans);
console.log(mult);
console.log(div);

