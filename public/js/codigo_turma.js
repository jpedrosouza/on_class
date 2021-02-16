(function() {
    const loginExit = document.getElementById('login-exit-button');

    if (loginExit.className.toString() == 'true') {
        loginExit.innerHTML = `
        <input class="logout" type="image" src="/assets/images/logout.svg">
        `;
    } else {
        loginExit.innerHTML = `
        <input type="image" src="/assets/images/user.svg">   
        `;
    }
}());