

function inputReq() {
    let name = document.querySelector("#Name").value;
    let email = document.querySelector("#Email").value;
    let age = document.querySelector("#Age").value;
    let pass = document.querySelector("#Password").value;
    let contact = document.querySelector("#Contact").value;
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

    else if (!(email.includes('@yahoo')) && !(email.includes('@gmail'))) {//check @ and email/yahoo is included or not
        alert("please enter your valide ID and must have @ Gmail/Yahoo");
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

    else if (pass == "") {//check pass is not empty
        alert("Please Fill password ");
        document.querySelector("#Password").focus();
        return false;
    }

    else if (!(pass.match(/[!@#$%^&*+-=]/))) {//check pass at least 1 spacel charcter
        alert("Please use spacel Character in password ");
        document.querySelector("#Password").focus();
        return false;
    }

    else if (contact == "") {//check contact is not empty
        alert("Please Fill Contact Number ");
        document.querySelector("#Contact").focus();
        return false;
    }

    else if (contact.length<10 || contact.length>10) {//check number length is 10
        alert("Enter 10 Numbers ");
        document.querySelector("#Contact").focus();
        return false;
    }

    PrintDetails(name, email, age,pass,contact);//Call function for printiog all details and passe arguments
}

function PrintDetails(name, email, age,pass,contact) { // This function for printing input details 
    let box = document.querySelector(".box");
    box.innerHTML = `<b>Name : </b> ${name}<br><br>
    <b>Email id: </b> ${email}<br><br>
    <b>Age : </b> ${age} <br><br>
    <b>Password : </b> ${pass} <br><br>
    <b>Pho. Number : </b> ${contact} <br><br>
    `;
}
