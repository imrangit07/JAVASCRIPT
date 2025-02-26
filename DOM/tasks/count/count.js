let a = 0;
let head = document.getElementById("head");
let Negbtn = document.getElementById('Negbtn');
let pos = document.getElementById('pos');


function Count(){
    // console.log("clicked");
    head.innerText = ++a;
}
function NCount(){
    // console.log("clicked");
    if(a!=0){
        head.innerText =  --a;
    }else{
        let body = document.body;
        body.style.backgroundColor = "red";
        alert("Not less then Zero");
    }
}
