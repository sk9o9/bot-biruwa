
//assinging variables with the ids
var alertBox = document.getElementById("alert-container");
var stockAlert = document.getElementById("stock-div");
var loginBox = document.getElementById("login-container");
var storeSection = document.getElementById("store-section");
var storeBody = document.getElementById("store-body");

function cartMessage() {
    //opens modal
    alertBox.style.display = "block";
}

function stock() {
    // opens the modal with background blurred and opaque and hides the overflow
    storeSection.style.filter = "blur(2px)";
    storeSection.style.opacity = "0.2";
    stockAlert.style.display = "block";
    storeBody.style.overflowY = "hidden";

}
//closes alert box
function closeAlert() {
    // closes the modal opened by stock()
    alertBox.style.display = "none";
    stockAlert.style.display = "none";
    storeSection.style.filter = "none";
    storeSection.style.opacity = "1";
    storeBody.style.overflowY = "visible";
}

function login() {
    // opens the login modal on every page 
    loginBox.style.display = "block";
}

function closeLogin() {
    // closes the login modal on every page 
    loginBox.style.display = "none";
}

//function to validate the form
// displays an alert as a result of form validation
function checkForm(e) {
    //assigning variable names
    var fullName = document.forms["contactForm"]["username"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    //conditions
    if (fullName == "" || phone == "" || email == "" || message == "") {
        // when the atleast one of the fields are empty
        alert("Empty field founds! Message not sent!");
        event.preventDefault(); // prevents from reloading the page
    } else {
        // when all fields are filled 
        alert("Message sent!");
        
    }
}

// newsletter form validation 
function submitNews(){
    // displays an alert 
    //assigning the variable as a result of form validation
    var newsEmail = document.forms["newsForm"]["newsEmail"].value;

    //condtion

    if(newsEmail ==""){
        // when the email field is empty 
        alert("empty field found! Try Again");
    } else{
        // when email field is not empty
        alert("Request sent !");
    }

}

//timer for the countdown
const startMin = 59;
let time = startMin * 60;

// assinging variable with id 
const countDown = document.getElementById('countdown');

// updates every seceond 
setInterval(updateCountDown, 1000);

function updateCountDown() {
    // calculation goes here 
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // assigning the calculated value here 
    countDown.innerHTML = ` 00 : ${minutes} : ${seconds}`;
    time--;

}
//a function to change the image in product detail page using display properties 
//assigning varaibles with id 
var img1 = document.getElementById("fb1");
var img2 = document.getElementById("fb2");
var img3 = document.getElementById("fb3");
var sm1 = document.getElementById("sm1");
var sm2 = document.getElementById("sm2");
var sm3 = document.getElementById("sm3");

function change1() {
    //image changer
    img2.style.display = "none";
    img3.style.display = "none";
    img1.style.display = "block";
    //border color
    sm1.style.border = "1px solid #cf173f";
    sm3.style.border = "1px solid #dddddd";
    sm2.style.border = "1px solid #dddddd";
}
function change2() {
    //image changer
    img1.style.display = "none";
    img3.style.display = "none";
    img2.style.display = "block";
    //border color
    sm2.style.border = "1px solid #cf173f";
    sm3.style.border = "1px solid #dddddd";
    sm1.style.border = "1px solid #dddddd";
}
function change3() {
    //image changer
    img2.style.display = "none";
    img1.style.display = "none";
    img3.style.display = "block";
    //border color
    sm3.style.border = "1px solid #cf173f";
    sm2.style.border = "1px solid #dddddd";
    sm1.style.border = "1px solid #dddddd";
}