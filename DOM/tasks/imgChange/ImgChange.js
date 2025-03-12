
let image = document.getElementById("image");
let allBox = document.querySelectorAll("h1");
// console.log(allBox);

allBox.forEach((Event)=>{
    Event.addEventListener("mouseenter",(Event)=>{
        console.log(Event.target);
        image.src =Event.target.dataset.image; 
    }) 
})


// let image = document.getElementById("image");
// let allBox = document.querySelector(".all-box");
// // console.log(allBox);

// allBox.addEventListener("mouseover", (event) => {
//     console.log(event.target.tagName);

//     if (event.target.tagName == "H1") {
//         image.src = event.target.getAttribute("data-image");
//     }
// })



