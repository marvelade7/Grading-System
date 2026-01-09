function secSchoolGrade() {
    // console.log(Number(score.value));

    let userScore = parseFloat(score.value)

    if (userScore === '') {
        gradeRemark.innerHTML = 'Input cannot be empty'
    } else if (userScore >= 0 && userScore < 40) {
        letterGrade.innerHTML = 'F9'
        gradeRemark.innerHTML = 'You Failed'
    } else if (userScore >= 40 && userScore < 45) {
        letterGrade.innerHTML = 'E8'
        gradeRemark.innerHTML = 'Pass'
    } else if (userScore >= 45 && userScore < 50) {
        letterGrade.innerHTML = 'D7'
        gradeRemark.innerHTML = 'Pass'
    } else if (userScore >= 50 && userScore < 55) {
        letterGrade.innerHTML = 'C6'
        gradeRemark.innerHTML = 'Credit'
    } else if (userScore >= 55 && userScore < 60) {
        letterGrade.innerHTML = 'C5'
        gradeRemark.innerHTML = 'Credit'
    } else if (userScore >= 60 && userScore < 65) {
        letterGrade.innerHTML = 'C4'
        gradeRemark.innerHTML = 'Credit'
    } else if (userScore >= 65 && userScore < 70) {
        letterGrade.innerHTML = 'B3'
        gradeRemark.innerHTML = 'Good'
    } else if (userScore >= 70 && userScore < 75) {
        letterGrade.innerHTML = 'B2'
        gradeRemark.innerHTML = 'Very Good 👋👋'
    } else if (userScore >= 75 && userScore <= 100  ) {
        letterGrade.innerHTML = 'A1'
        gradeRemark.innerHTML = 'Excellent 🎊🎊'
    } else {
        gradeRemark.innerHTML = 'Invalid Score'
    }
    gradeTitle.innerHTML = 'YOUR GRADE:'
    // result.style.display = 'block'
}

function polytechnicGrade() {
    let gradePoint = parseFloat(cgpa.value);

    if (gradePoint === '') {
        gradeClass.innerHTML = 'Enter your CGPA'
    } else if (gradePoint >= 3.5 && gradePoint <= 4.0) {
        gradeClass.innerHTML = "You're on Distinction 🎊🎊"
    } else if (gradePoint >= 3.0 && gradePoint < 3.5) {
        gradeClass.innerHTML = "You're on Upper Credit 👍"
    } else if (gradePoint >= 2.5 && gradePoint < 3.0) {
        gradeClass.innerHTML = "You're on Lower Credit"
    } else if (gradePoint >= 2.0 && gradePoint < 2.5) {
        gradeClass.innerHTML = "You're on Pass"
    } else if (gradePoint >= 0 && gradePoint < 2.0) {
        gradeClass.innerHTML = "You Failed"
    } else {
        gradeClass.innerHTML = 'Invalid CPGA value'
    }
}

function universityGrade() {
    let gradePoint = parseFloat(uniGPA.value);

    if (gradePoint === '') {
        gradeClass.innerHTML = 'Enter your CGPA'
    } else if (gradePoint >= 4.5 && gradePoint <= 5.0) {
        gradeClass.innerHTML = "You're on First Class 🎊🎊"
    } else if (gradePoint >= 3.5 && gradePoint < 4.5) {
        gradeClass.innerHTML = "You're on Second Class Upper 👍"
    } else if (gradePoint >= 2.4 && gradePoint < 3.5) {
        gradeClass.innerHTML = "You're on Second Class Lower"
    } else if (gradePoint >= 1.5 && gradePoint < 2.4) {
        gradeClass.innerHTML = "You're on Third Class"
    } else if (gradePoint >= 1.0 && gradePoint < 1.5  ) {
        gradeClass.innerHTML = "You Passed"
    } else if (gradePoint >= 0 && gradePoint < 1  ) {
        gradeClass.innerHTML = "You Failed"
    } else {
        gradeClass.innerHTML = 'Invalid CPGA value'
    }
}