
$(document).ready(function(){


    $("li").hover(function(){
        $(this).css("font-size", "28px");
        }, function(){
        $(this).css("font-size", "24px");
    });

    $("h3").hover(function(){
        $(this).css("text-decoration", "underline");
        }, function(){
        $(this).css("text-decoration", "none");
    });
    
    $(".icon").on("click",function(){
		// $("#search").animate({left:"0"});
		$("#search").css("display","inline-block");
	});

    $(".new").on("click", function(){
    	$(".notebook-content").append(
    		$("<div class='outer'>").append(
    			$("<div class='inner'>")).append(
    			$("<h3>Bmal1: Circadian Rhythm</h3>")).append(
    			$("<span class='update'>Updated:</span>")));
    });
});
