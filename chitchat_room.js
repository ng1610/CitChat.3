var firebaseConfig = {
  apiKey: "AIzaSyBxcf9BQDVtgLXNKDSv_VKvOzHd5-hqTbw",
  authDomain: "chitchat-25e2b.firebaseapp.com",
  databaseURL: "https://chitchat-25e2b-default-rtdb.firebaseio.com",
  projectId: "chitchat-25e2b",
  storageBucket: "chitchat-25e2b.appspot.com",
  messagingSenderId: "887551067944",
  appId: "1:887551067944:web:7cf83d9285360ce8aab21d",
  measurementId: "G-X1G53MER9Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("user name");
  document.getElementById("user_name").innerHTML="Welcome " + username;

  function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location= "chitchat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room_names", Room_names);
 row= "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML+= row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location= "chitchat_page.html";
}
function LogOut(){
  localStorage.removeItem("user name");
  localStorage.removeItem("room_name");
  window.location="chitchat.html";
}