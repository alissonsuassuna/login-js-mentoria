document.getElementById('login-form').addEventListener('submit', login)

function login(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const passoword = document.getElementById('password').value

    if(email === 'alisson@gmail.com' && passoword === '123') {
        window.location.href = 'welcome.html'
    } else {
        alert('os dados estão errados')
    }
}