$Project2: 
---------------------------------
Coding Academy Website.

Users: Orange Coding Academy Students, Orange Coding Academy Trainers , Orange Coding Academy Employees.

Developers: Ahmad AlGhzawi , Ahmad AlNsour.

Project Main Idea is to collect and present what Orange Coding Academy does , what they present, their mission, target, challenge, Objectives , events and students profiles.

Code example:
-------------
HTML:
<body>
 <div id="header">
   <div class="container-fluid black-bg">
     <div class="container">
        <div class="row text-white">
      <div class="col-md-2" >
	<img class="logo" src="main-logo.png"> <!-- logo -->
     </div>
<!-- <div class="col-md-1"></div> -->
  <div class="col-md-4 d-flex align-items-center">	<!-- coding academy text -->
       <h1><a class="nav-link text-white text-size" id="code-text">Coding Academy</a></h1>
  </div>
<!-- <div class="col-md-1"></div> -->
  <div class="col-md-6 d-flex align-items-end justify-content-end"><!-- tabs -->
      <ul class="nav nav-pills nav-fill flex-fill font-weight-bold">
    	<li class="nav-item ">
	 <a class="nav-link text-white text-size" id="about">About</a>
	</li>
	<li class="nav-item ">
	 <a class="nav-link text-white text-size" id="events">Events</a>
	</li>
	<li class="nav-item ">
	 <a class="nav-link text-white text-size" id="heroes">Heroes</a>
	</li>
      </ul>
  </div>
</div>
</div>
</div>
</div>
</body>

CSS:
.login-form { 
 	width: 25%;
 	margin:0 auto;
 	margin-top: 60px;
 	padding-bottom: 20px;
 	padding-right: 20px;
	padding-top: 10px;
	padding-left: 20px;
	position:relative;
	border: 2px solid black;
	border-radius:50px;
}

.login-input{
  	width: 85%;
  	padding: 12px 20px;
  	margin: 20px 0px 20px 15px;
  	display: inline-block;
  	border-radius: 15px ;
  	box-sizing: border-box;
}

JavaScript:
function appendEvent(){
	var lastEvent = $("#last-event");
	lastEvent.removeAttr("id");
	var toAdd = "<div id='last-event' class='col-md-6 d-flex justify-content-center mt-4'><div 			class='card' style='width: 25rem'><img src='...' class='card-img-top'><div 			class='card-body'><h5 class='card-title'></h5><p class='card-text'></p><a href='#' 			class='btn btn-dark'>Read more</a></div></div></div>"
	var newEvent = lastEvent.after(toAdd);
	var eventImg = $("#last-event").find("img");
	var eventTitle = $("#last-event ").find("h5");
	var eventContent = $("#last-event ").find("p");
	eventTitle.html($("#get-event-title").val());
}

Code Links:
-----------
Css:/home/owner/Desktop/GHZAWI/github/project-2/style.css
Html:/home/owner/Desktop/GHZAWI/github/project-2/index.html
JavaScript:/home/owner/Desktop/GHZAWI/github/project-2/main.js

libraries used:
--------------
1-fontawesome v5.7.0
2-bootstrap V 4.3.1
3-jquery V 3.3.1.slim
4-cdnjs V 1.14.7
5-External Css File.

Source Code:
-----------


Support:
-------
If you are having issues, please let us know.
We have a mailing list located at 
Ahmadmhnsour@gmail.com
ahmd.ghzawi@gmail.com
or you can call us at 
Ahmad AlNsour 0777517573
Ahmad AlGhzawi 0777521258

License:
---------
No licenses.
