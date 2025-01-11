var plus = document.querySelector(".question1 .question");
var icon = document.querySelector(".question1 .question i");
var details = document.querySelector(".question1 .details");

var visible = 0;
var i = 4

plus.addEventListener("click", function(){
if(visible==0){
     details.style.display = "block";
     icon.style.rotate = "45deg";
     visible = 1;
 }

 else{
     details.style.display = "none";
     icon.style.rotate = "none";
     visible = 0;
 }
   

});

