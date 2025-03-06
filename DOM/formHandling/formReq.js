

function inputReq() {
    let name = document.querySelector("#Name").value;
    let email = document.querySelector("#Email").value;
    let age = document.querySelector("#Age").value;
    console.log(typeof age);
    console.log(age.length);

    if (name == "") {
        // alert("please enter your name");

        let message = document.querySelector("#errorMessage");
        message.style.display = "block";
        message.textContent = "Please Enter Your Name";
        document.querySelector("#Name").focus();
        return false;
    }
    else if (email == "") {
        alert("please enter your email");
        document.querySelector("#Email").focus();
        return false;//false
    }
    else if (!(email.includes('@'))) {//includes
        alert("please enter your valide email and must have @");
        document.querySelector("#Email").focus();
        return false;
    }
    else if (age == "") {
        alert("please enter your age");
        document.querySelector("#Age").focus();
        return false;
    }
    else if (isNaN(age)) {
        alert("Please Enter Only Number : " + age);
        document.querySelector("#Age").focus();
        return false;
    }
    else if (age.length > 3 || age <= 0) {
        alert("This is not a valide Age : " + age);
        document.querySelector("#Age").focus();
        return false;
    }
}