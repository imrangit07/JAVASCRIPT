function sumFun() {
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value)
    let sum = num1 + num2

    let h1 = document.createElement("h1");
    let add = document.body.appendChild(h1);
    add.textContent = sum;

    return false;

}