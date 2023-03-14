document.querySelector('.search-button').addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelector('.modal-container').classList.add('modal-container-open');
});

document.querySelector('.modal-close-button').addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelector('.modal-container').classList.remove('modal-container-open');
});
