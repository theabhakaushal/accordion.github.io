$(document).ready(()=>{
	$(".insideText").hide();

 $("#first").click(() => {

        $("#firstInside").slideToggle();
        $("#secondInside").slideUp();
        $("#thirdInside").slideUp();


    });

 $("#second").click(() => {

        $("#secondInside").slideToggle();
        $("#firstInside").slideUp();
        $("#thirdInside").slideUp();

    });



 $("#third").click(() => {

        $("#thirdInside").slideToggle();
         $("#firstInside").slideUp();
         $("#secondInside").slideUp();

    });


})