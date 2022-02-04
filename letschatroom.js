// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM090ezQ-2Zscv4XVXDwT77DTjYDiYVEE",
    authDomain: "letschat-app-7341e.firebaseapp.com",
    databaseURL: "https://letschat-app-7341e-default-rtdb.firebaseio.com",
    projectId: "letschat-app-7341e",
    storageBucket: "letschat-app-7341e.appspot.com",
    messagingSenderId: "211479852799",
    appId: "1:211479852799:web:6ae439d28d1208f6ce3eca"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom() {
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "letschatpage.html";
  }

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message : msg,
      like : 0
    });
    document.getElementById("msg").value = ""
  }

  function getData(){
firebase.database().ref("/").on("value", function (snapshot) {
  document.getElementById("output").innerHTML = "";
  snapshot.forEach(function (childsnapshot) {
    childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}