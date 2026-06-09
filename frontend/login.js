document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let username =
        document.getElementById("username").value;

    let password =
        document.getElementById("password").value;

    fetch("http://127.0.0.1:5000/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username,
            password
        })
    })
    .then(res => res.json())
    .then(data => {

        if(data.success){

    localStorage.setItem("loggedIn","true");

    window.location.href="index.html";

}else{

    alert("Invalid Credentials");

}

    });

});