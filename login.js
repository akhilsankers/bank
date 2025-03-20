function login() {
    // Get the username and password input elements
    var acc = document.getElementById('acc').value;
    var pass = document.getElementById('pass').value;

    var key = localStorage.getItem(acc);
    console.log(key)
    if (key) {
        // Account exists in local storage
        var userDetails = JSON.parse(key);
        console.log(userDetails)
        if (userDetails.password === pass) {
            // Password is correct
            console.log(userDetails.password )
            // Store key in sessionStorage before redirecting
            sessionStorage.setItem("userKey", key);
            //
            window.location.href = 'home.html';
        } else {
            
            // Password is incorrect
            alert('Incorrect password');
        }
    } else {
        // Account does not exist in local storage
        alert('Account not found');
    }
}