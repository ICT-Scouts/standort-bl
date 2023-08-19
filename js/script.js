function pics(){
    AboutUs.style.display = "none";
    hobby.style.display = "none";
    btnDIV.style.display = "none";
    btn3.style.display = "block";
    ski.style.display = "block";
    judo.style.display = "block";
}
function About(){
  AboutUs.style.display = "none";
  hobby.style.display = "none";
  btnDIV.style.display = "none";
  btn3.style.display = "block";
  MitFamilie.style.display = "block";
  bombe.style.display = "block"
}
function More(){
  AboutUs.style.display = "none";
  hobby.style.display = "none";
  btnDIV.style.display = "none";
  btn3.style.display = "block";
  video.style.display = "block";
  luffy.style.display = "block";
} 
function ICT(){

}

function back(){
  AboutUs.style.display = "block";
  hobby.style.display = "block";
  btnDIV.style.display = "block";
  btn3.style.display = "none";
  video.style.display = "none";
  MitFamilie.style.display = "none";
  ski.style.display = "none";
  bombe.style.display = "none";
  judo.style.display = "none";
  luffy.style.display = "none"
}

function parallax(element__, multip) {
    var s = document.getElementById(element__);
  var yPos =  0 - window.scrollY / multip;  
  s.style.top = yPos + "%"; }

window.addEventListener("scroll", function(){
    parallax("s1", -12);
   });


   document.getElementById("btnDIV").onmouseover = function() { document.getElementById("TextbtnDIV").style.visibility = "visible";
   document.getElementById("btn1").style.visibility = "visible";}
   document.getElementById("btnDIV").onmouseout  = function() { document.getElementById("TextbtnDIV").style.visibility = "hidden";
   document.getElementById("btn1").style.visibility = "hidden";}

   document.getElementById("hobby").onmouseover = function() { document.getElementById("btn2").style.visibility = "visible";}
   document.getElementById("hobby").onmouseout = function() { document.getElementById("btn2").style.visibility = "hidden";}

