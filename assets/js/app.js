$(document).ready(function(){
	$(".sectn-food").hide(); //para esconder las secciones de las comidas
	$(function(){ //efecto splash
   setTimeout(function() {
      $('#sectn-splash').fadeOut(500);
   }, 3000);
	});

//final del splash
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
//final del hover section food

	$("#img-chinese-1").hover(function(){ //hover para secction chinese
		$("#img-chinese-1").append("<span class='food-span'>Mei Hua</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-chinese-2").hover(function(){ //hover para secction chinese
		$("#img-chinese-2").append("<span class='food-span'>Casa Lai</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-chinese-3").hover(function(){ //hover para secction chinese
		$("#img-chinese-3").append("<span class='food-span'>Nueva China</span>");
		}, function(){
			$(".food-span").remove();
		});
	//final del hover section chinese
	
	$("#img-indian-1").hover(function(){ //hover para secction indian
		$("#img-indian-1").append("<span class='food-span'>Rishtedar</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-indian-2").hover(function(){ //hover para secction indian
		$("#img-indian-2").append("<span class='food-span'>Ram Salaam</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-indian-3").hover(function(){ //hover para secction indian
		$("#img-indian-3").append("<span class='food-span'>The Raj</span>");
		}, function(){
			$(".food-span").remove();
		});
	//final del hover section indian

	$("#img-italian-1").hover(function(){ //hover para secction italian
		$("#img-italian-1").append("<span class='food-span'>Benvenuto</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-italian-2").hover(function(){ //hover para secction italian
		$("#img-italian-2").append("<span class='food-span'>Signore</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-italian-3").hover(function(){ //hover para secction italian
		$("#img-italian-3").append("<span class='food-span'>Pastamore</span>");
		}, function(){
			$(".food-span").remove();
		});
	//final del hover section italian

	$("#img-mexican-1").hover(function(){ //hover para secction mexican
		$("#img-mexican-1").append("<span class='food-span'>Plaza Garibaldi</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-mexican-2").hover(function(){ //hover para secction mexican
		$("#img-mexican-2").append("<span class='food-span'>Tortilla Factory</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-mexican-3").hover(function(){ //hover para secction mexican
		$("#img-mexican-3").append("<span class='food-span'>Los Cuates</span>");
		}, function(){
			$(".food-span").remove();
		});
	//final del hover section mexican

	$("#img-japanese-1").hover(function(){ //hover para secction japanese
		$("#img-japanese-1").append("<span class='food-span'>Niu Sushi</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-japanese-2").hover(function(){ //hover para secction japanese
		$("#img-japanese-2").append("<span class='food-span'>Izakaya Yoko</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-japanese-3").hover(function(){ //hover para secction japanese
		$("#img-japanese-3").append("<span class='food-span'>Ramen Kintaro</span>");
		}, function(){
			$(".food-span").remove();
		});
	//final del hover section japanese

	$("#img-vegetarian-1").hover(function(){ //hover para secction vegetarian
		$("#img-vegetarian-1").append("<span class='food-span'>Ruca Bar</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-vegetarian-2").hover(function(){ //hover para secction vegetarian
		$("#img-vegetarian-2").append("<span class='food-span'>El Huerto</span>");
		}, function(){
			$(".food-span").remove();
		});
	$("#img-vegetarian-3").hover(function(){ //hover para secction vegetarian
		$("#img-vegetarian-3").append("<span class='food-span'>Arte Vegetal</span>");
		}, function(){
			$(".food-span").remove();
		});
	//final del hover section vegetarian

    

});//final del ready function







	





