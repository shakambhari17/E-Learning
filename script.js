function startCourse(courseName) {
    alert(`You have started the course: ${courseName}`);
}

function generateCertificate() {
    const certificateOutput = document.getElementById('certificate-output');
    certificateOutput.innerHTML = 'Congratulations! You have completed the course!';
}
