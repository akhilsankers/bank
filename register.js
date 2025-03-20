function signup(){
    let user = document.getElementById('user')
    let acc = document.getElementById('acc')
    let pass = document.getElementById('pass')
    let userDetails = {
        username: user.value,
        password: pass.value,
        balance: 0
    };
    localStorage.setItem(acc.value, JSON.stringify(userDetails));
    alert("Regestration sucessfull")
    window.location.href = 'login.html'
}