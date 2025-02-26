document.getElementById('getInTouch').addEventListener('click', function() {
    document.getElementById('get_in_touch').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('contact-form-submit-template--20868304306211__contact_form_NEKEMV').addEventListener('click', function(event) {
    event.preventDefault();
    var firstName = document.querySelector('input[name="contact[fname]"]').value;
    var lastName = document.querySelector('input[name="contact[lname]"]').value;
    document.getElementById('user-name').textContent = firstName + " " + lastName;
    document.querySelector('.contact-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});
