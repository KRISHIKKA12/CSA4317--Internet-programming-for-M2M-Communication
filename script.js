function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email && password) {
        document.getElementById("loginMessage").innerText = "Login successful!";
        return false;
    } else {
        document.getElementById("loginMessage").innerText = "Please enter both email and password.";
        return false; 
    }
}

function registerUser() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username && email && password) {
        document.getElementById("registerMessage").innerText = "Registration successful!";
        return false; 
    } else {
        document.getElementById("registerMessage").innerText = "Please fill out all fields.";
        return false; 
    }
}
