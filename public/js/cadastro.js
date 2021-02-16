let professor_check = document.getElementById('professor-check');

async function createUser() {
    await fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email: '@email.com', password: '123' })
        }).then(response => response.json())
        .then((response) => {
            console.log(response['code']);

            if (response['code'] == 0) {
                divDados.innerHTML += `
            <label for="register" style="align-self: center; color: red;">Email ou senha incorretos</label>                
            `;
            } else if (response['code'] == 1) {
                window.location.href = '/inicio';
            }

        });
}