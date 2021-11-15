//getting the button
var button = document.getElementById("btn");
var container = document.getElementById("container");
var menu = document.getElementById("menu")
var close = true;
button.addEventListener("click" ,function(){
    //alert("hello")
    //container.classList.remove("main_container");
    container.classList.add("active");
    if(close){
        container.classList.add("active");
        menu.style.zIndex = "0";
        close = false
    }else{
        close = true;
        container.classList.remove("active");
        menu.style.zIndex = "-1";
    }
});