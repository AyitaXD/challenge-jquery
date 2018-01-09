$(document).ready( function(){
	//oculta la flecha del navbar
	 $('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
	renderActivities(activitiesArray);

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
	for (var i in recipe){
	var titleRecipe = recipe[i].title;
  var authorName = recipe[i].source.name;
  var image = recipe[i].name;
	$('.list-recipes').append('<a class="item-recipe" href="#">'+'<span class="attribution">'+'<span class="title-recipe">'+titleRecipe+'</span><span class="metadata-recipe">'+'<span class="author-recipe">'+authorName+'</span>'+'<span class="bookmarks-recipe">'+'<span class="icon-bookmark"></span>'+'</span></span></span>'+'<img src="img/recipes/320x350/'+image+'.jpg'+'"/></a>');
	};
};


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	for (var i in activitiesArray){
		renderActivity(activitiesArray[i]);
	};
};

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
  $('.wrapper-message').hide();
	$('.list-activities').append('<a href="#" class="item-activity">' +
		'<span class="attribution">' +
		'<span class="avatar">' +
		'<img src="'+recipe.userAvatar+'" class="image-avatar">' +
		'</span>' +
		'<span class="meta">' +
		'<span class="author">' + recipe.userName + '</span>' +
		'<span class="recipe">' + recipe.recipeName + '</span>:' + recipe.text +
		'<span class="location">&mdash;' + recipe.place + '</span>' +
		'</span>' +
		'</span>' +
		'<div class="bg-image" style="background-image: url(' + recipe.image + ');"></div> </a>');
}

//muestra una noticia en la sección news
function printNews() {
	$('#news').html('NUEVAS RECETAS');
}
