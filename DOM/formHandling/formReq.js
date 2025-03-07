

function inputReq() {
    let name = document.querySelector("#Name").value;
    let email = document.querySelector("#Email").value;
    let age = document.querySelector("#Age").value;
    console.log(typeof age);
    console.log(age.length);

    if (name == "") {//check name is empty or not
        // alert("please enter your name");
        let message = document.querySelector("#errorMessage");
        message.style.display = "block";
        message.textContent = "Please Enter Your Name";
        document.querySelector("#Name").focus();
        return false;
    }

    else if (email == "") {//check email is empty or not
        alert("please enter your email");
        document.querySelector("#Email").focus();
        return false;//false
    }

    else if (!(email.includes('@')) || (!(email.includes('yahoo')) && !(email.includes('gmail')))) {//check @ and email/yahoo is included or not
        alert("please enter your valide ID and must have @ && Gmail/Yahoo");
        document.querySelector("#Email").focus();
        return false;
    }

    else if (age == "") {//check age is empty or not
        alert("please enter your age");
        document.querySelector("#Age").focus();
        return false;
    }

    else if (isNaN(age)) {//check age is Number or not
        alert(`"${age}" is Not a Number`);
        document.querySelector("#Age").focus();
        return false;
    }

    else if (age.length > 3 || age <= 0) {//check age length is 3 only and age is not smaller then 0
        alert(age + " is not a valide Age. ");
        document.querySelector("#Age").focus();
        return false;
    }

    PrintDetails(name, email, age);//Call function for printiog all details and passe arguments
}

function PrintDetails(name, email, age) { // This function for printing input details 
    let box = document.querySelector(".box");
    box.innerHTML = `<b>Name : </b> ${name}<br><br>
    <b>Email id: </b> ${email}<br><br>
    <b>Age : </b> ${age} <br><br>
    `;
}
