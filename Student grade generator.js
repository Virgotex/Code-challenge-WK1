function calculateGrade() {
    const marks = document.getElementById("marks").value;
    const output = document.getElementById("output");
    let grade;
    switch (true) {
        case marks >= 80:
            grade = "A";
            break;
        case marks >= 60:
            grade = "B";
            break;
        case marks >= 50:
            grade = "C";
            break;
        case marks >= 40:
            grade = "D";
            break;
        default:
            grade = "E";
            break;
    }
    output.textContent = grade;
}
