var modal = document.getElementById('modal_create-account');

var button = document.getElementById('cards-add_card_button');

var span = document.getElementsByClassName('close_button')[0];

// ACTIONS
button.onclick = function() {
    modal.classList.add('animation-fadein');
    modal.classList.remove('animation-fadeout');
}

span.onclick = function() {
    modal.classList.add('animation-fadeout');
    modal.classList.remove('animation-fadein');
}
  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add('animation-fadeout');
        modal.classList.remove('animation-fadein');
    }
}