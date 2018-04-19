
// var sorts = document.getElementsByClassName("button");
// console.log(sorts);
//  for (var i=0; i< sorts.length; i++) {
//  	sorts[i].addEventListener("click",function(){
//  		var current = document.getElementsByClassName("active");
//  		current[0].className=current[0].className.replace("active","");
//  		this.className += "active";
//  	});
//  };


$(document).ready(function(){

    $("h3").hover(function(){
        $(this).css("text-decoration", "underline");
        }, function(){
        $(this).css("text-decoration", "none");
    });
    newCount=0;
    $(".new").on("click", function(){
    	$(".project-content-main").append(
    		$('<div class="project-rows"><div class="project-outer" style="background-color: #3498db;"> <div class="project-inner"> <a class="notebook-name" href="notebook_page_2.html"><h3>New Project</h3></a> <span class="last-updated">Updated: Todays Date</span> </div> </div>'));
    	newCount=newCount+1;
	});

    $(".hamburger").on("click", function(){
    	$(".sidebar").animate({left:0});
    });

    $(".close-nav").on("click",function(){
		$(".sidebar").animate({left:"-100%"});
	});
});

// create an array of objects with the content pieces
var projectTitle = [];
var projectDate = [];
var projectInfo =  [{title: "Bmal1: Circadian Rhythm", date:"04/8/2018", color:"#3498db"},
					{title: "BMT Titrations", date:"02/13/2018", color:"#1abc9c"},
					{title: "Sucrose Rescue", date:"03/22/2018", color:"purple"},
					{title: "Abx + HSC", date:"12/23/2017", color:"#1abc9c"}, 
					{title: "Adrenergic Receptors", date:"11/17/2017", color:"#DF3939"},
					{title: "BM Spinning", date:"01/4/2018", color:"#1abc9c"}];


//for each object in the array, append it to the html
for (var i=0; i<projectInfo.length; i++){
	projectTitle.push(projectInfo[i].title);
	projectDate.push(new Date(projectInfo[i].date).getTime());

};


function addProjectsByTitle(){
	for (var p=0; p<projectTitle.length; p++){
		for (var i=0; i<projectInfo.length; i++){
			if (projectTitle[p]===projectInfo[i].title){
				$(".add").append('<div class="project-outer" style="background-color: '+projectInfo[i].color+';"> <div class="project-inner"> <a class="notebook-name" href="notebook_page_2.html"><h3>'+projectInfo[i].title+'</h3></a> <span class="last-updated">Updated: '+projectInfo[i].date+'</span> </div> </div>');
			};
		};
	};
};
function addProjectsByDate(){
	for (var p=0; p<projectDate.length; p++){
		// console.log(projectDate[p]);
		for (var i=0; i<projectInfo.length; i++){
			formattedProjectInfoDate=new Date(projectInfo[i].date).getTime();
			// console.log(projectDate[p],formattedProjectInfoDate);
			if ((projectDate[p])=== formattedProjectInfoDate){
				$(".add").append('<div class="project-outer" style="background-color: '+projectInfo[i].color+';"> <div class="project-inner"> <a class="notebook-name" href="notebook_page_2.html"><h3>'+projectInfo[i].title+'</h3></a> <span class="last-updated">Updated: '+projectInfo[i].date+'</span> </div> </div>');
			};
		};
	};
};


addProjectsByTitle();

$(".title-sort").on("click", function(){
	projectTitle.sort();
	$(".add").empty();
	addProjectsByTitle();
	$(".title-sort").addClass("active");
	$(".date-sort").removeClass("active");

});

$(".date-sort").on("click", function(){
	projectDate.sort();
    $(".add").empty();
	addProjectsByDate();
	$(".date-sort").addClass("active");
	$(".title-sort").removeClass("active");
})
///////////	

// $(".title-sort").on("click", function(){
// 	projectTitle.sort;
// 	console.log(projectTitle);
// });


//Sort array alphabetically
// function sortTitles(){
//  	projectTitle.sort();
//  	console.log(projectTitle);
//  };


//sharing tab would be sharing the link of the project page with another user


