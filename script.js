document.getElementById("calculate").addEventListener("click", function () {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("result").textContent = `Your age is ${age} years.`;
});
