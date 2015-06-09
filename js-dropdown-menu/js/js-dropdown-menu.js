window.onload = function(){
	var products = document.getElementById("products");
	var services = document.getElementById("services");
	var products_ul = products.getElementsByTagName("ul")[0];
	var services_ul = services.getElementsByTagName("ul")[0];
	products.onmouseover = function(){
		products_ul.style.display = "block";
	};
	products.onmouseout = function(){
		products_ul.style.display = "none";
	};
	services.onmouseover = function(){
		services_ul.style.display = "block";
	};
	services.onmouseout = function(){
		services_ul.style.display = "none";
	};
};