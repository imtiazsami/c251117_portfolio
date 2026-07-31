const scriptURL = 'https://script.google.com/macros/s/AKfycbxx91Duyewbr1xxE2WVBqiNAfycB3G6haxeIPsN7VFE9OC7zNGMZgd8zHVu7J_xLEpGkA/exec';

const form = document.getElementById("contactForm");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset();
            alert("Message Sent Successfully!");
            console.log('Success!', response);
        })
        .catch(error => {
            alert("Something Wrong!");
            console.error('Error!', error.message)
        })
})