import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBBpMXxiXJzufDDReBJYEfgJLrC79nlMLE",
  authDomain: "yamed-3c894.firebaseapp.com",
  projectId: "yamed-3c894",
  storageBucket: "yamed-3c894.appspot.com",
  messagingSenderId: "530679842301",
  appId: "1:530679842301:web:f53fb96bd8fa3dcdc54594"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Set up our register function
function register () {
    // Get all our input fields
    const username = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const cell = document.getElementById("cellnumber");
    const employeNo = document.getElementById("empNo");
    const occupation = document.getElementById("identy");
    const comp = document.getElementById("comp");
    const birthday = document.getElementById("birthday");
    const startDate = document.getElementById("dateStart");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
     
  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
    
      // Add this user to Firebase Database
      var database_ref = database.ref()
    
      // Create User data
      var user_data = {
        displayName : username,
        surname : lastname,
        number : cell,
        employe_number : employeNo,
        occupation : occupation,
        company : comp,
        birthDay : birthday,
        startDate : startDate,
        email : email,
        last_login : Date.now()
      }
    
      // Push to Firebase Database
      database_ref.child('Users/' + user.uid).set(user_data)
    
      // Navigate to next window
      var next = window.location.href = ('file:///C:/Users/agridiesel1/Desktop/Websites/dazzle/html/login.html');
      window.location.replace(next);
  
      // Done
      alert('User Created, Please login to your account.')
    })
  }
    
  // Set up our login function
  function login () {
    // Get all our input fields
    const email = document.getElementById('lemail').value
    const password = document.getElementById('lpassword').value
    
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
    
      // Add this user to Firebase Database
      var database_ref = database.ref()
    
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
    
      // Push to Firebase Database
      database_ref.child('Users/' + user.uid).update(user_data)
  
      // Navigate to next window
      var next = window.location.href = ('file:///C:/Users/agridiesel1/Desktop/websites/dazzle/html/home.html');
      window.location.replace(next);
        
    })
    .catch(function(error) {
      // Firebase will use this to alert its errors
      var error_code = error.code
      var error_message = error.message
    
      alert(error_message)
    })
  }
  
  // Get current user data
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      database.ref('/Users/'+ user.uid).on('value', function(snapshot) {
        document.getElementById("logged").innerText = snapshot.val().displayName + " " + snapshot.val().surname;
        document.getElementById("occ").innerText = snapshot.val().occupation;
        document.getElementById("comp").innerText = snapshot.val().company;
        document.getElementById("empNo").innerText = snapshot.val().employe_number;
      })
    } else {
      console.log('User not found! ')
    }
  }); 
  
  // Logout
  const logoutBtn = document.getElementById("logOut");
  logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut();
    var next = window.location.href = ('file:///C:/Users/agridiesel1/Desktop/websites/dazzle/index.html');
      window.location.replace(next);
  })