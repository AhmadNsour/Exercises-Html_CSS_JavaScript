/*
Q1:
Check if jQuery is loaded
*/
$(function (){
    $("#q1").text("jQuery is loaded ")
});
/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/
$("a[href='top']").click(function() {
$("html, body").animate({ scrollTop: 0 },500);
    return false;
  });
/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/
$('#btn1').click(function () {
    $('#box').animate({
      width: '300px',
      height: '300px'
    }, 600);
  });

$('#btn2').click(function () {
    $('#box').animate({
      width: '150px',
      height: '150px',
      margin:"15px"
    }, 1000);
  });
/*
Q4:
Learn how to fadein your boxes
*/
$('#fade').click(function () {
    $('#div1').fadeIn(20);
    $('#div2').fadeIn(800);
    $('#div3').fadeIn(2000);
  });
/*
Q5:
User must first accept then he or she can signup
*/
$('#accept').click(function () {
    if ($('#submitbtn').is(':disabled')) {
      $('#submitbtn').removeAttr('disabled');
    } else {
      $('#submitbtn').attr('disabled', 'disabled')
    }
  });
/*
Q6:
Let them print
*/
$('a.printPage').click(function () {
    window.print();
  });
/*
Q7:
Can username be too long? Yest it can - lets limit that
*/
// var maxLength = 20;
// $('textarea').keyup(function () {
//   var textlen = maxLength - $(this).val().length;
//   $('#rchars').text(textlen);
// });
$(document).ready(function() {
    var text_max = 20;
    $('#rchars').html(text_max);
    $('#textarea').keyup(function() {
        var text_length = $('#textarea').val().length;
        var text_remaining = text_max - text_length;
        $('#rchars').html(text_remaining);
    });
});
/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
$('#boldDiv').css({fontWeight:"bold"})
/*
Q9:
Add new div to your website
*/
// $(document).ready(function(){
//     $("button").click(function(){
//         $("#paa").prepend("<h1>This is a heading</h1>"); 
//     });
// });
 $(document).ready(function(){
        $("#buttonA").click(function(){
            $("#buttonA").after("<div>Here should be some text probably with some sense within but its friday so im really really tired</div>"); 
        });
    });
/*
Q10:
Select values from a JSON object using jQuery
*/
$(document).ready(function(){
 var v1= {"name":"ahmad", "age":25,"job":"Civil Engineer"};
 var v2= {"name":"ahmad", "age":23,"job":"ELectric Engineer"};
 var v3= {"name":"Hala", "age":23,"job":"Civil Engineer"};
 var obj = {"obj1":v1, "obj2":v2 };
 $("#divSelect").append("<li>"+obj.obj1.name+"</li>");
 $("#divSelect").append("<li>"+v3.name+"</li>");
});
/*
Q11:
Add element within ul list
*/
$('#btnclick').on('click', function () {
$("#header ul").append('<li><a href="#">new Li Element</a></li>');
  });
/*
Q12:
Know what user puts into textbox
*/
$("#Get").click(function () {
    $('#msg').html($('#usertext').val());	
    console.log($("#usertext").val());
});

$("#Reset").click(function () {
	$('#msg').html("");
	$('#usertext').val("");
});
/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 