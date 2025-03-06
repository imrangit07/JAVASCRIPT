

function inputReq() {
    let name = document.querySelector("#Name").value;
    let email = document.querySelector("#Email").value;
    let age = document.querySelector("#Age").value;

    console.log("clicked");


    if (name == "") {
        // alert("please enter your name");
        let message = document.querySelector("#errorMessage");
        message.textContent = "Please Enter Your Name";
        document.querySelector("#Name").focus();
        return false;
    } else if (email == "") {
        alert("please enter your email");
        document.querySelector("#Email").focus();
        return false;
    } else if (!(email.includes('@'))) {
        alert("please enter your valide email and must have @");
        document.querySelector("#Email").focus();
        return false;
    }
    else if (age == "") {
        alert("please enter your age");
        document.querySelector("#Age").focus();

        return false;
    }
}