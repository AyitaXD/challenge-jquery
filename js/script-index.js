$(document).ready( function(){
	//oculta la flecha del navbar
	 $('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
var recipe =[];
function renderHighlightedRecipes(recipesArray) {
	for (var i in recipesArray) {
		 if (recipesArray[i].highlighted == true){
		 recipe.push(recipesArray[i]);
		}
	}
	renderRecipe(recipe);
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}

//muestra una noticia en la sección news
function printNews() {
	$('#news').html('NUEVAS RECETAS');
}
