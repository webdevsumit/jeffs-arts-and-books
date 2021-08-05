

window.addEventListener("scroll",function () {
				var comP2 = document.getElementById("about-company-p2");
				var comP3 = document.getElementById("about-company-p3");
				var comP4 = document.getElementById("about-company-p4");
				var comP5 = document.getElementById("about-company-p5");
				
				if (window.pageYOffset>=200) {
								comP2.style.opacity = 1;
								comP2.style.transform = "translateY(0px)";
				}else {
								comP2.style.opacity = 0;
								comP2.style.transform = "translateY(30px)";
				};
				if (window.pageYOffset>=300) {
								comP3.style.opacity = 1;
								comP3.style.transform = "translateY(0px)";
				}else {
								comP3.style.opacity = 0;
								comP3.style.transform = "translateY(30px)";
				};
				if (window.pageYOffset>=400) {
								comP4.style.opacity = 1;
								comP4.style.transform = "translateY(0px)";
				}else {
								comP4.style.opacity = 0;
								comP4.style.transform = "translateY(30px)";
				};
				if (window.pageYOffset>=440) {
								comP5.style.opacity = 1;
								comP5.style.transform = "translateY(0px)";
				}else {
								comP5.style.opacity = 0;
								comP5.style.transform = "translateY(30px)";
				};
				
				var authH = document.getElementById("author-h");
				var authP1 = document.getElementById("author-p1");
				var authP2 = document.getElementById("author-p2");
				var authP3 = document.getElementById("author-p3");
				var authP4 = document.getElementById("author-p4");
				
				if (window.pageYOffset>=700 && window.innerWidth<500) {
								authH.style.opacity = 1;
								authH.style.transform = "translateX(0px)";
				}else if (window.pageYOffset>=480 && window.innerWidth>500) {
								authH.style.opacity = 1;
								authH.style.transform = "translateX(0px)";
				}
				else {
								authH.style.opacity = 0;
								authH.style.transform = "translateX(-30px)";
				};
				if (window.pageYOffset>=800) {
								authP1.style.opacity = 1;
								authP1.style.transform = "translateX(0px)";
				}else if (window.pageYOffset>=580 && window.innerWidth>500) {
								authP1.style.opacity = 1;
								authP1.style.transform = "translateX(0px)";
				}
				else {
								authP1.style.opacity = 0;
								authP1.style.transform = "translateX(-30px)";
				};
				if (window.pageYOffset>=900) {
								authP2.style.opacity = 1;
								authP2.style.transform = "translateX(0px)";
				}else if (window.pageYOffset>=700 && window.innerWidth>500) {
								authP2.style.opacity = 1;
								authP2.style.transform = "translateX(0px)";
				}
				else {
								authP2.style.opacity = 0;
								authP2.style.transform = "translateX(-30px)";
				};
				if (window.pageYOffset>=1000) {
								authP3.style.opacity = 1;
								authP3.style.transform = "translateX(0px)";
				}else if (window.pageYOffset>=800 && window.innerWidth>500) {
								authP3.style.opacity = 1;
								authP3.style.transform = "translateX(0px)";
				}
				else {
								authP3.style.opacity = 0;
								authP3.style.transform = "translateX(-30px)";
				};
				if (window.pageYOffset>=1050) {
								authP4.style.opacity = 1;
								authP4.style.transform = "translateX(0px)";
				}else if (window.pageYOffset>=850 && window.innerWidth>500) {
								authP4.style.opacity = 1;
								authP4.style.transform = "translateX(0px)";
				}
				else {
								authP4.style.opacity = 0;
								authP4.style.transform = "translateX(-30px)";
				};
				
});
