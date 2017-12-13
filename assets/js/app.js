$(document).ready(function(){
	$("#img-chinese").hover(function(){ //hover para texto sobre las imágenes
		$("#img-chinese").append("<span class='food-span'>Comida China</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-indian").hover(function(){ //hover para texto sobre las imágenes
		$("#img-indian").append("<span class='food-span'>Comida Hindú</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-italian").hover(function(){ //hover para texto sobre las imágenes
		$("#img-italian").append("<span class='food-span'>Comida Italiana</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-mexican").hover(function(){ //hover para texto sobre las imágenes
		$("#img-mexican").append("<span class='food-span'>Comida Mexicana</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-japanese").hover(function(){ //hover para texto sobre las imágenes
		$("#img-japanese").append("<span class='food-span'>Comida Japonesa</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-vegetarian").hover(function(){ //hover para texto sobre las imágenes
		$("#img-vegetarian").append("<span class='food-span'>Comida Vegetariana</span>");
		}, function(){
			$(".food-span").remove();
		});
	$(function(){ //efecto splash
   setTimeout(function() {
      $('#sectn-splash').fadeOut(500);
   }, 3000);
	});
});//final del ready function







	




//$('.elemento').toggle(); //para hacer aparecer y desaparecer las secciones con el filtro
