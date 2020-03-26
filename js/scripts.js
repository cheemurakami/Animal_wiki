$(document).ready(function(){
 var answer = prompt("cat, dog, or turtle?");
 if (answer === "cat"){
   $
   $(".cat-description").show();
 } else if (answer === "dog"){
   $(".dog-description").show();
 } else if (answer === "turtle"){
   $(".turtle-description").show();
 } else {
   alert('Please pick one from those three');
 };
});