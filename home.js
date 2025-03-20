function Depo() {
    let acc = document.getElementById("dacc").value; // Get account key
    let bal = Number(document.getElementById("dbal").value); // Convert balance input to number
    use = localStorage.getItem(acc);
    let userDetails = JSON.parse(use);
    console.log("Account Key:", acc);
    console.log("Deposit Amount:", bal);
    console.log("Before Update:", userDetails);

    if (!isNaN(bal) && bal > 0) { // Ensure bal is a valid number
        userDetails.balance = (userDetails.balance || 0) + bal; // Update balance safely

        console.log("After Update:", userDetails);

        // Update balance display in UI
        document.getElementById("dbala").innerText = `Balance Amound: ${userDetails.balance}`;

        // Save updated userDetails back to localStorage and sessionStorage
        localStorage.setItem(acc, JSON.stringify(userDetails));
        sessionStorage.setItem("userKey", JSON.stringify(userDetails));

        alert("Deposit Successful!");
    } else {
        alert("Please enter a valid deposit amount.");
    }
}
function withd() {
    let acc = document.getElementById("wacc").value; // Get account key
    let bal = Number(document.getElementById("wbala").value); // Convert balance input to number
    use = localStorage.getItem(acc);
    let userDetails = JSON.parse(use);
    console.log("Account Key:", acc);
    console.log("Withdraw Amount:", bal);
    console.log("Before Update:", userDetails);

    if (!isNaN(bal) && bal > 0) { // Ensure bal is a valid number
        userDetails.balance = (userDetails.balance || 0) - bal; // Update balance safely

        console.log("After Update:", userDetails);

        // Update balance display in UI
        document.getElementById("dbala").innerText = `Balance Amound: ${userDetails.balance}`;
        document.getElementById("With").innerText = `The withdrawed Amound: ${bal}`;

        // Save updated userDetails back to localStorage and sessionStorage
        localStorage.setItem(acc, JSON.stringify(userDetails));
        sessionStorage.setItem("userKey", JSON.stringify(userDetails));

        alert("Withdraw Successful!");
    } else {
        alert("Please enter a valid deposit amount.");
    }
}



function logout(){
    window.location.href = 'login.html'
}