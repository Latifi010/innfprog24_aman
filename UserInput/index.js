let username


document.getElementById("MySubmit").onclick = function(){
    username = document.getElementById("Mytext").value;
    document.getElementById("myh1").textContent = `hello ${username}`


}