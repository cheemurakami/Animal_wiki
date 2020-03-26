$(document).ready(function(){
 var answer = prompt("cat, dog, or turtle?");
  if (answer.toLowerCase() === "cat"){
   $(".cat-img").show();
  } else {
    $(".cat-img").hide();
  }
    $(".cat-img").click(function(){
    $(".cat-description").show();
  });

  if (answer.toLowerCase() === "dog"){
    $(".dog-img").show();
  } else {
    $(".dog-img").hide();
  }
    $(".dog-img").click(function(){
    $(".dog-description").show();
    });

  if (answer.toLowerCase() === "turtle"){
    $(".turtle-img").show();
  } else {
    $(".turtle-img").hide();
  }
    $(".turtle-img").click(function(){
    $(".turtle-description").show();
    });
  });
