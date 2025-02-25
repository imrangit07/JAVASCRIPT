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