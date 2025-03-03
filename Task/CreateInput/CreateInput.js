let Box = document.querySelector(".box");
let Input = document.querySelector("#input");
let AddInput = document.querySelector("#addInput");
let btn = document.querySelector(".btn");
let SumBtn = document.querySelector("#sumBtn");
let count = 1;

AddInput.addEventListener("click", () => {

    if (count <= 4) {
        count++;
        console.log(count);
        let inputs = document.createElement("input");
        inputs.placeholder = "Enter Here";
        document.body.appendChild(inputs);

        inputs.style.width = "350px";
        inputs.style.padding = "10px 20px";
        inputs.style.borderRadius = "10px 20px";
        inputs.style.backgroundColor = "orange";
        inputs.style.border = "1px solid #fff";
        inputs.style.marginTop = "20px";

    } else {
        alert("NO more input");
    }

})





// This is for STYLING
btn.style.display = "flex";
btn.style.gap = "20px";
btn.style.marginTop = "20px";

// Input.style.marginTop="20px";
Input.style.width = "350px";
Input.style.padding = "10px 20px";
Input.style.borderRadius = "10px 20px";
Input.style.backgroundColor = "orange";
Input.style.border = "1px solid #fff";




AddInput.style.backgroundColor = "red";
AddInput.style.color = "#fff";
AddInput.style.border = "none";
AddInput.style.borderRadius = "10px";
AddInput.style.padding = "4px 20px";


SumBtn.style.backgroundColor = "red";
SumBtn.style.color = "#fff";
SumBtn.style.border = "none";
SumBtn.style.borderRadius = "10px";
SumBtn.style.padding = "4px 20px";
