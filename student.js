const form = document.getElementById("formSubmit");

const students = JSON.parse(localStorage.getItem("students")) || [];
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const studentName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("date").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const address = document.getElementById("address").value.trim();
    const enroll = document.getElementById("enroll").value.trim();

    if(mobile.length != 10){ 
        alert("Enter Valid Mobile Number")
        return;
    }  
    // ----------------------- Bs ab Table m Add Krna hai  ----------

    const student = {
        stuName: studentName,
        mail: email,
        courses: course,
        years: year,
        add: address,
        enrollment: enroll,
        mob:mobile,
        dobm:dob
    }
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Student Added Successfully");
    form.reset();

});

const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click",()=>{
    window.location.href = "studentDetails.html";
})