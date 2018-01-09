$(document).ready(function() {
  /*
  *oculta el icono menu del navbar de recipe
  */
  $('.js-menu').hide();
  console.log('Etapa 7');
  addMake();
  removeMake();
});

/*funcion que agrega la clase make al div page
 *agrega la clase active a show-recipe y se la quita show-make
 */
function addMake() {
  $('.js-show-recipe').click(function() {
    $('#page').addClass('make');
    $('.js-show-recipe').addClass('active');
    $('.js-show-make').removeClass('active');
  });

}
/*funcion que quita la clase make al div page recipe
 *agrega la clase active a show-make y se la quita show-recipe
 */
function removeMake() {
  $('.js-show-make').click(function() {
    $('#page').removeClass('make');
    $('.js-show-make').addClass('active');
    $('.js-show-recipe').removeClass('active');
  });
}
