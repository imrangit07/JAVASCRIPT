let Elenent = document.createElement("h1");
let Elenent2 = document.createElement("h2");
let btn = document.createElement("button");
let head = document.getElementById('head');


// console.log(btn);
Elenent.textContent = "Hello, Imran hussain";
Elenent2.textContent = "welldone";
btn.textContent = "Click Me";
btn.style.backgroundColor = "red";
btn.style.padding = "15px 25px";
btn.style.color = "white";
btn.style.borderRadius = "10px";
btn.style.fontSize = "40px";

let bd = document.body;
// bd.append(Elenent)
// bd.style.padding = "20%";

bd.append(Elenent);
bd.append(Elenent2);
bd.append(btn);


//Create attributes

bd.setAttribute('bgcolor',"lightgreen");
bd.setAttribute('align','center');

Elenent.setAttribute('style','background-color:yellow; color:red');
Elenent2.setAttribute('style','background-color:blue; color:#fff; font-size:40px');

head.removeAttribute('style');

