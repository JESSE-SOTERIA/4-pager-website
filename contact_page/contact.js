const button = document.getElementById("submitButton");

button.addEventListener("click",(e)=>{
    e.preventDefault()
    let clientName = document.getElementById("cname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    



     let number = parseInt(phone);
     console.log(number);


    if(clientName === "" || email === "" || password === "" || phone === "" ){
        alert("all fields must be filled")
        return;
    }
    if(isNaN(number)){
        alert("phone number should have numeric characters alone")
        return
    }
   
   alert("form submitted successfully!")


})
