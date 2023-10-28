document.getElementById('login-form').addEventListener('submit', login)

function login(event) {
    event.preventDefault()

    const email = document.getElementById('email').value
    const passoword = document.getElementById('password').value

    fetch('http://localhost:5000/')
    .then( response => response.json())
    .then( data => {
        console.log(data[0].email)
        console.log(data[0].senha)

        if(email === data[0].email && passoword === data[0].senha ) {
            window.location.href = 'welcome.html'
        } else {
            alert('Email ou senha estão errados')
        }
    })

    .catch(error => {
        console.log(error)
    })
}