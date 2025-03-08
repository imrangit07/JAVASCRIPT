function subFun(event) {
    event.preventDefault();

    let name = document.querySelector("#Name").value;
    let email = document.querySelector("#Email").value;
    let password = document.querySelector("#Password").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
    let country = document.querySelector("#Country").value;

    let courses = Array.from(document.querySelectorAll('input[name="Course"]:checked'))
        .map(checkbox => checkbox.value);

    // let message = document.querySelector("#Message").value;

    let print = `Name: ${name}<br><br>
Email: ${email}<br><br>
Password: ${password}<br><br>
Gender: ${gender}<br><br>
Country: ${country}<br><br>
Courses: ${courses}<br><br>
`;

// console.log(print);


document.querySelector(".form-container").innerHTML=print;
}