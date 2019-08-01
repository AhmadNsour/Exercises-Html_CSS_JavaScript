$(function(){
	$("#code-text").click(function(){
		$("#about-page, #events-page, #heroes-page, #login-page, #reset-password, #event-page, #hero-page").hide();
		$("#landing-page").show();
	});
	$("#about").click(function(){
		$("#landing-page, #events-page, #heroes-page, #login-page, #reset-password, #event-page, #hero-page").hide();
		$("#about-page").show();
	});
	$("#events").click(function(){
		$("#landing-page, #about-page, #heroes-page, #login-page, #reset-password, #event-page, #hero-page").hide();
		$("#events-page").show();

		$("#add-event-btn").click(function(){
			if (loggedIn) {
				$("#landing-page, #about-page, #login-page, #heroes-page, #reset-password, #hero-page").hide();
				$("#events-page, #event-page").show();
			}
			else{
				$("#landing-page, #about-page, #events-page, #heroes-page, #reset-password, #event-page, #hero-page").hide();
				$("#login-page").show();
				$("#login-btn").click(toShowEventPage);
			}
			
			function toShowEventPage(){
				if($("#user").val() === "admin" && $("#pass").val() === "admin"){
					$("#landing-page, #about-page, #login-page, #heroes-page, #reset-password, #hero-page").hide();
					$("#events-page, #event-page").show();
					loggedIn = true;
				}
				else{
					alert("Wrong Username or Password");
				}
			}

			$("#append-event-btn").click(appendEvent);
			function appendEvent(){
				var lastEvent = $("#last-event");
				lastEvent.removeAttr("id");
				var toAdd = "<div id='last-event' class='col-md-6 d-flex justify-content-center mt-4'><div class='card' style='width: 25rem'><img src='...' class='card-img-top'><div class='card-body'><h5 class='card-title'></h5><p class='card-text'></p><a href='#' class='btn btn-dark'>Read more</a></div></div></div>"
				var newEvent = lastEvent.after(toAdd);
				var eventImg = $("#last-event").find("img");
				var eventTitle = $("#last-event ").find("h5");
				var eventContent = $("#last-event ").find("p");
				eventTitle.html($("#get-event-title").val());
				eventContent.html($("#get-event-content").val());
				$("#event-page").hide();
			}	
		});

		$('.show-more').click(more);
		function more(){
			var getId = this.id;
			var grabPrev = $("#"+getId).prev();
			grabPrev.show()
		}

		$("#get-event-img").click(eventImage);
		function eventImage(){
        	var fd = new FormData();
        	var files = $('#file')[0].files[0];
        }
	});

	$("#heroes").click(function(){
		$("#landing-page, #events-page, #about-page, #login-page, #reset-password, #event-page, #hero-page").hide();
		$("#heroes-page").show();

		$("#add-hero-btn").click(function(){
			if (loggedIn) {
				$("#landing-page, #about-page, #login-page, #events-page, #reset-password, #event-page").hide();
				$("#heroes-page, #hero-page").show();
			}
			else{
				$("#landing-page, #about-page, #events-page, #heroes-page, #reset-password, #event-page, #hero-page").hide();
				$("#login-page").show();
				$("#login-btn").click(toShowHeroPage);
			}

			function toShowHeroPage(){
				if($("#user").val() === "admin" && $("#pass").val() === "admin"){
					$("#landing-page, #about-page, #login-page, #events-page, #reset-password, #event-page").hide();
					$("#heroes-page, #hero-page").show();
					loggedIn = true;
				}
				else{
					alert("Wrong Username or Password");
				}
			}

			$("#append-hero-btn").click(appendHero);
			function appendHero(){
				var lastHero = $("#last-hero");
				lastHero.removeAttr("id");
				var toAdd = "<div id='last-hero' class='col-md-6 mt-4 d-flex justify-content-center'><div class='card rounded-circle' style='width: 25rem; overflow: hidden'><img src='...' class='card-img-top'><div class='card-body'><h5 class='card-title'></h5><dir class='card-text'><h6></h6></dir><dir class='card-text'><h6></h6></dir><div class='row'><div class='col-md-12 d-flex justify-content-center'><button class='btn btn-dark'>More</button></div></div></div></div></div>"
				var newHero = lastHero.after(toAdd);
				var heroImg = $("#last-hero").find("img");
				var heroName = $("#last-hero ").find("h5");
				var heroEmail = $("#last-hero ").find("dir:first-child");
				var heroMobile = $("#last-hero ").find("dir:nth-child(2)");
				heroName.html($("#get-hero-name").val());
				heroEmail.html($("#get-hero-email").val());
				heroMobile.html($("#get-hero-email").val());
				$("#hero-page").hide();
			}
		});
	});
});












	