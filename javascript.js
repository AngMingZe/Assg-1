var button = document.getElementById("emailMe");
temp = "Thank you for contacting me :)";
let newDiv = document.createElement("div");

button.addEventListener("click" , function(){
    newDiv.classList.add("temp");
    newDiv.innerHTML = temp;
    document.body.appendChild(newDiv);
});