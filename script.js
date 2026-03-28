const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

function sendMail() {
    const email = document.getElementById('emailInput').value;

    if(email === ""){
        alert("Please enter your email");
        return;
    }

    window.location.href = `mailto:mdafridirazakhan772001@gmail.com?subject=Portfolio Contact&body=User Email: ${email}`;
}