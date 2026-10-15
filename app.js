
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAxjksIZOpTtGmtUq_IMYdhewaFEMM28hA",
    authDomain: "auth-app-d460f.firebaseapp.com",
    projectId: "auth-app-d460f",
    storageBucket: "auth-app-d460f.firebasestorage.app",
    messagingSenderId: "253928801753",
    appId: "1:253928801753:web:5885c9ad0d60e2808285c8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const email = document.getElementById("email");
const password = document.getElementById("password");
const signupForm = document.getElementById("signup-form");
const signinBtn = document.getElementById("signin");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    createUserWithEmailAndPassword(auth, emailValue, passwordValue).then((res) => {
        alert("User created successfully!");
        console.log(res)
    })
        .catch((err) => {
            console.log(err);

        })


})

signinBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const emailValue = email.value;
    const passwordValue = password.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue).then((res) => {
        alert("User signed in successfully!");
        console.log(res)
        getUserData(res.user.uid).then((res) => {
            console.log(res)
            getUserDetails(res.uid).then((res) => {
                console.log("user details", res)
            })
        })
    })
        .catch((err) => {
            console.log(err);

        })

})







