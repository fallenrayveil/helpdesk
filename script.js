document.querySelector('.right button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('http://localhost:3000/login', { // Ubah URL sesuai dengan server Anda
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'dashboard.html';
        } else {
            document.getElementById('error-message').innerText = data.message;
        }
    })
    .catch(error => console.error('Error:', error));
});
