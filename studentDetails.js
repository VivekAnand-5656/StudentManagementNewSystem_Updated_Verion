const tableBody = document.getElementById("studentBody");

const students = JSON.parse(localStorage.getItem("students")) || [];
tableBody.innerHTML = "";

students.forEach((student, index) => {
    const row = document.createElement('tr');
    row.innerHTML = ` 
        <td>${index + 1}</td>
        <td>${student.stuName}</td>
        <td>${student.mail}</td>
        <td>${student.courses}</td> 
        <td><i class="fa-solid fa-eye"></i></td>
        <td><i class="fa-solid fa-pen-to-square"></i></td>
        <td><i class="fa-solid delete fa-calendar-minus"></i></td>
    
    `;
    tableBody.appendChild(row);
// --- Remove ---
    const deleteBtn = row.querySelector(".fa-calendar-minus");
    deleteBtn.addEventListener("click", () => {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students))
        row.remove();
    })
});


// --- View Ka Kaam Hoga Ab
