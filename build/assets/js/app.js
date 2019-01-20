var modal = document.getElementById('modal_create-account');

var button = document.getElementById('cards-add_card_button');

var span = document.getElementsByClassName('close_button')[0];

// ACTIONS
button.onclick = function() {
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}

span.onclick = function() {
    modal.style.visibility = "hidden";
    modal.style.opacity = 1;
  }
  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
        modal.style.opacity = 1;
    }
}