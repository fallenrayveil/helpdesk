// Fungsi untuk melakukan login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
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
}

// Event listener untuk tombol login
document.querySelector('.right button[type="submit"]').addEventListener('click', function(e) {
    e.preventDefault();
    login();
});

// Event listener untuk tombol "Enter"
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        login();
    }
});
