 var typed=new Typed("#animation" , {
    strings:["Web Developer","Designer", "Programmer"],
    typeSpeed: 70,
    backSpeed:40,
    backDelay:1000,
    loop:true

 });




 var backtotop = document.getElementById("backtotop");
 window.addEventListener("scroll" , function(){
   if(window.scrollY > 300 ){
    backtotop.classList.add("show")
   }else{
      backtotop.classList.remove("show")
   }
 });
