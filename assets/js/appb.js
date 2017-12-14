function validateFood () {
	var validFood = ["china","hindú", "italiana", "mexicana", "japonesa", "vegetariana"];
	var onlyLetters = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
		
	$("input").click(function(){
        alert("The addon was clicked.");
    });	
	
		
		/*var inputSearch = $("#input-search").val();
		if (inputSearch.length === 0) {
			$(".input-group").append("<span class='alert'>Debe ingresar un tipo de comida</span>");
			
		} /*else if (!onlyLetters.test(inputSearch)) {
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
		};*/

};

