// Menu Toggle Global
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".btn").addEventListener("click", function(e){
       e.preventDefault();
       var navi = document.querySelector("nav");
       var navi_height = navi.clientHeight || navi.offsetHeight;
       navi.style.display = navi_height ? "none" : "block";
    });
 });




