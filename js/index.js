

window.addEventListener("scroll",function () {
				var comP2 = document.getElementById("about-company-p2");
				var comP3 = document.getElementById("about-company-p3");
				var comP4 = document.getElementById("about-company-p4");
				
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
				}
});
