

  /// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzQ-bazXPdJJr9m8lwVITyTS0fbUYfAqw",
    authDomain: "signup-5b10c.firebaseapp.com",
    databaseURL: "https://signup-5b10c.firebaseio.com",
    projectId: "signup-5b10c",
    storageBucket: "signup-5b10c.appspot.com",
    messagingSenderId: "903245028397",
    appId: "1:903245028397:web:20358d2b6e9cb5a09d6ca4",
    measurementId: "G-6PYH36Q3C1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();


  
  
  function signUp(){
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
    
    window.alert("Signed Up");
  }
  
  
  
  function signIn(){
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
    
    
  }
  
  
  function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
  }
  
  
  
  auth.onAuthStateChanged(function(user){
    
    if(user){
      
      var email = user.email;
      alert("Active User " + email);
      
      //Take user to a different or home page

      //is signed in
      
    }else{
      
      alert("No Active User");
      //no user is signed in
    }
    
    
    
  });
  

