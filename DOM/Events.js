let clicked = document.getElementById("clicked")

function Click(){
    // alert("hello, I am Clicked");
    clicked.textContent = "Zero";
}
function dblClick(){
    // alert("hello, I am dbl. Clicked");
    clicked.textContent = "Hero";

}
function enterMouse(){
    alert("hello, Mouse Entered");
}
function leveMouse(){
    alert("hello, Mouse Leaved");
}


//This is for background changes
function red(){
    document.body.style.backgroundColor = "red";
    clicked.style.color = "#fff";
    clicked.style.backgroundColor = "blue";
}
function yellow(){
    document.body.style.backgroundColor = "yellow";
    clicked.style.color = "#fff";
    clicked.style.backgroundColor = "red";


}
function blue(){
    document.body.style.backgroundColor = "blue";
    clicked.style.color = "#000";
    clicked.style.backgroundColor = "yellow";


}