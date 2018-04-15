
$(document).ready(function(){

    $("h3").hover(function(){
        $(this).css("text-decoration", "underline");
        }, function(){
        $(this).css("text-decoration", "none");
    });

    $(".new").on("click", function(){
    	$(".project-content-main").append(
    		$("<div class='project-rows'>").append(
    		$("<div class='project-outer'>").append(
    			$("<div class='project-inner'>").append(
    				$("<a class='notebook-name' href='notebook_page_2.html'><h3>Bmal1: Circadian Rhythm</h3></a>").append(
    					// $("<h3>Bmal1: Circadian Rhythm</h3>")).append(
    					$("<span class='update'>Last Updated: </span>"))))));
	});

    $(".hamburger").on("click", function(){
    	$(".sidebar").animate({left:0});
    });

    $(".close-nav").on("click",function(){
		$(".sidebar").animate({left:"-100%"});
	});
});

//sharing tab would be sharing the link of the project page with another user

//Grab all the titles of the projects and store in an array
var projectTitle=[];
for(var i=0; i<6; i++)
	projectTitle[i] = $("h3").text();
console.log(projectTitle);
//Sort array alphabetically