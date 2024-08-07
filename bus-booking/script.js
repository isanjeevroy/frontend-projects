function validation(){
    var email=document.form.email.value;
    var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password=document.form.password.value;
    var con_password=document.form.con_password.value;
// if(password.match(con_password)){
//     document.getElementById("password").innerHTML="";
//         return true;
// }
// else{
//     document.getElementById("password").innerHTML="Password should be same";
//         return false;
// }

    if(email.match(pattern)||email.length==0){
        document.getElementById("message").innerHTML="";
        return true;
    }
    else{
        document.getElementById("message").innerHTML="Please enter valid email";
        return false;
    }
}
function login(){
    var email=document.form.username.value;
    var username=admin;
    var pass=Vignan*123;
    if(email.match(username) && password.match(pass)){
        location.replace("welcome.html")
        return true;
    }
    else{
        document.getElementById("loginerror").innerHTML="Please enter correct username and password";
        return false;
    }
}
burger = document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navLeft = document.querySelector('.nav-left');
navRight = document.querySelector('.nav-right');

burger.addEventListener('click',() =>{
    navbar.classList.toggle('h-navres');
    navbar.classList.toggle('img');
    navLeft.classList.toggle('v-classres');
    navRight.classList.toggle('v-classres');
})

// for active navbar's list

const list = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY + 120 < sec[len].offsetTop){}  
    list.forEach(ltx => ltx.classList.remove("active"));
    list[len].classList.add("active");
}
activeMenu();
window.addEventListener('scroll',activeMenu);
