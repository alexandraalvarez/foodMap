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
		$("#img-vegetarian-1").append("<span class='food-span'>El árbol</span>");
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

  function validateFood () {
	var validFood = ["china","hindú", "italiana", "mexicana", "japonesa", "vegetariana"];
	var onlyLetters = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		
	$("#button-search").on("click",function(){
		var inputSearch = $("#input-search").val();
		if (inputSearch.length === 0) {
			$(".input-group").append("<span class='alert'>Debe ingresar un tipo de comida</span>");
			
		} else if (!onlyLetters.test(inputSearch)) {
			$(".input-group").append("<span class='alert'>Debe ingresar el tipo de comida con letras</span>");
		} else {
			$(".alert").remove();
			$("#sectn-type-food").hide();//para esconder la sección de los tipos de comidas
		} function searchFood() {
			if (inputSearch == validFood[0]) {
				$("#sectn-chinese").show();
			} else if (inputSearch == validFood[1]){
				$("#sectn-indian").show();
			} else if (inputSearch == validFood[2]){
				$("#sectn-italian").show();
			} else if (inputSearch == validFood[3]){
				$("#sectn-mexican").show();
			} else if (inputSearch == validFood[4]){
				$("#sectn-japanese").show();
			} else if (inputSearch == validFood[4]){
				$("#sectn-japanese").show();
			} else if (inputSearch == validFood[5]){
				$("#sectn-vegetarian").show();
			} 
		};
	});
};  

});//final del ready function







	





