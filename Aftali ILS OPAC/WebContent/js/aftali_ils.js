var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
/*var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;*/
var width = window.innerWidth;

document.body.className = 'fade';

document.addEventListener("DOMContentLoaded", function(e) {
    document.body.className = '';
  });


/*Show date and time*/
myTimer();

var myVar = setInterval(function() { myTimer()}, 1000);

function myTimer() {
	var date = new Date();
	var hour = date.getHours();
	
	var minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute; 
	} else {
		minute = minute;
	}
	
	var seconds = date.getSeconds();
	if (seconds < 10) {
		seconds = "0" + seconds; 
	} else {
		seconds = seconds;
	}
	
	var day = date.getDate();
	var month = "";
	
	switch (date.getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
	}
	
	var year = date.getFullYear();
	
	var timeAndDate =  day  + " " + month  + " " + year + " - " + hour  + ":" + minute  + ":" + seconds;
	document.getElementById("date-banner").innerHTML = timeAndDate;
}



/*Back to top button*/
bttBtn = document.getElementById("btt");


var myScrollFunc = function() {
	
  var y = window.scrollY;
  
  
  if (y >= 400) {
	  bttBtn.className = "btt-show"
  } else {
	  bttBtn.className = "btt"
  }
};

window.addEventListener("scroll", myScrollFunc);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
		
	topBanner = document.getElementById("top-banner");
	logo = document.getElementById("lib-logo");
	date = document.getElementById("date-banner");
	loginBtn = document.getElementById("login-top");
	
	if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
		
		if (width > 1199) {
			
			topBanner.style.padding = "0px";
			logo.style.height = "80px";
			logo.style.width = "80px";
			date.style.fontSize = "19px";
			loginBtn.style.fontSize = "19px"
			
		} else if (width > 1023 && width < 1200) {
			
			topBanner.style.padding = "0px";
			logo.style.height = "70px";
			logo.style.width = "70px";
			date.style.fontSize = "17px";
			loginBtn.style.fontSize = "18px"
			
		} else if (width > 767 && width < 1024) {
			
			topBanner.style.padding = "9px";
			logo.style.display = "none";
			date.style.display = "none";
			
		} else if (width > 599 && width < 768) {
			
			topBanner.style.padding = "4px";
			logo.style.display = "none";
			date.style.display = "none";
			
		} else if (width > 479 && width < 600) {
			
			topBanner.style.padding = "4px";
			logo.style.display = "none";
			date.style.display = "none";
			
		} else if (width > 319 && width < 480) {
			
			topBanner.style.padding = "2px";
			logo.style.display = "none";
			date.style.display = "none";
			
		}
		
	} else {
		
		if (width > 1199) {
			
			topBanner.style.padding = "25px";
			logo.style.height = "135px";
			logo.style.width = "135px";
			date.style.fontSize = "32px";
			loginBtn.style.fontSize = "25px"
			
		} else if (width > 1023 && width < 1200) {
			
			topBanner.style.padding = "20px";
			logo.style.height = "125px";
			logo.style.width = "125px";
			date.style.fontSize = "30px";
			loginBtn.style.fontSize = "22px"
			
		} else if (width > 767 && width < 1024) {
			
			topBanner.style.padding = "12px";
			logo.style.display = "inline-block";
			date.style.display = "inline-block";
			
		} else if (width > 599 && width < 768) {
			
			topBanner.style.padding = "9px";
			logo.style.display = "inline-block";
			date.style.display = "inline-block";
			
		} else if (width > 479 && width < 600) {
			
			topBanner.style.padding = "7px";
			logo.style.display = "inline-block";
			date.style.display = "inline-block";
			
		} else if (width > 319 && width < 480) {
			
			topBanner.style.padding = "5px";
			logo.style.display = "inline-block";
			date.style.display = "inline-block";
			
		}
		

	}
	
}