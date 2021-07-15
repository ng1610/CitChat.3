function addUser(){
    console.log("working 1")
    user_name= document.getElementById("user_name").value;
    localStorage.setItem("user name", user_name);
    window.location="chitchat_room.html";
}