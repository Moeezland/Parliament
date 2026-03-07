<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2zJ6w86poNDCnB6toXvOpQ_jzE7CdLVE",
  authDomain: "moeezland-parliament.firebaseapp.com",
  projectId: "moeezland-parliament",
  storageBucket: "moeezland-parliament.firebasestorage.app",
  messagingSenderId: "447146344138",
  appId: "1:447146344138:web:8995d70b604bf0dd2a3e33",
  measurementId: "G-PLLE15TYED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// LOGIN
window.login = function() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("error").innerText = error.message;
    });
};

// LOGOUT
window.logout = function() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};

// Protect dashboard
onAuthStateChanged(auth, (user) => {
  if (!user && window.location.pathname.includes("dashboard")) {
    window.location.href = "login.html";
  }
});

</script>