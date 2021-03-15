/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json');

document.querySelector('#contact-submit').addEventListener('click', function(event) {
    event.preventDefault();

    let modal = document.querySelector('.modal');
    let html = document.querySelector('html');

    modal.classList.add('is-active');
    html.classList.add('is-clipped');

    $("#interest-form").submit();

    modal.querySelector('.modal-background').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });

    modal.querySelector('.modal-close').addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('is-active');
        html.classList.remove('is-clipped');
    });
});

document.querySelector('button#modal-close').addEventListener('click', function(event) {
    let modal = document.querySelector('.modal');
    let html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
});

document.querySelector('button#modal-close-corner').addEventListener('click', function(event) {
    let modal = document.querySelector('.modal');
    let html = document.querySelector('html');
    modal.classList.remove('is-active');
    html.classList.remove('is-clipped');
});