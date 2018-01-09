$(document).ready(function() {
  //oculta el icono menu del navbar de recipe
  $('.js-menu').hide();
  console.log('Etapa 7');
  addMake();
  removeMake();
});
//funcion que agrega la clase make al div page recipe
function addMake() {
  $('.js-show-recipe').click(function () {
    $('#page').addClass('make');
  });

}
//funcion que quita la clase make al div page recipe
function removeMake() {
  $('.js-show-make').click(function() {
    $('#page').removeClass('make');
  });
}
