document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // demo login username and password
    const validUsername = 'admin';
    const validPassword = '1234';

    if (username === validUsername && password === validPassword) {
        Swal.fire({
            icon: 'success',
            title: 'Login successful!',
            text: `Welcome, ${username}!`
        }).then(() => {
            window.location.href = 'order.html'; // Redirect after closing alert
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Invalid username or password'
        });
    }
});
