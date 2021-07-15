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
  user_name=localStorage.getItem("user name");
  room_name=localStorage.getItem("room_name");

  function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          like:0,
          user_name: user_name,
          message:msg
      });
      document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    console.log=(firebase_message_id);
    console.log=(message_data);
    name = message_data["user_name"];
    message= message_data["message"];
    like= message_data["like"];
    name_with_tag= "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag="<h4 class='message_h4'>"+ message + "</h4>";
    like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value=" +like+"onclick='updateLike(this.id)'>";
    span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>";
    row=name_with_tag+message_with_tag+like_button+span_with_tag;

    document.getElementById("output").innerHTML= row;

} }); }); } 
getData();

  function updateLike(message_id){
      console.log("clicked on like button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes= Number(likes) + 1;
      console.log(updated_likes);
  }

  firebase.database().ref(room_name).child(message_id).update({
    like: updated_likes
});

  function LogOut(){
    localStorage.removeItem("user name");
    localStorage.removeItem("room_name");
    window.location="chitchat.html";
  }
