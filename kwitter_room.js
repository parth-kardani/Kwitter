const firebaseConfig = {
      apiKey: "AIzaSyB6DHgJFLZzkDqUrY3Q50b0Tsu_scUrfLI",
      authDomain: "project93-13eb7.firebaseapp.com",
      databaseURL: "https://project93-13eb7-default-rtdb.firebaseio.com",
      projectId: "project93-13eb7",
      storageBucket: "project93-13eb7.appspot.com",
      messagingSenderId: "147552299778",
      appId: "1:147552299778:web:327e42aedb5b036153f01b",
      measurementId: "G-RGXDN98L1Y"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   

    user_name=localStorage.getItem("user_name");
    document.getElementById("welcome").innerHTML="Welcome   "+user_name+"!";



function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData(){
      firebase.database.ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      Room_names=childKey;
      console.log("room name-"+Room_names);
      });
      });
      }