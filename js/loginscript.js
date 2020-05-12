const loginForm = document.querySelector('.loginForm');

loginForm.addEventListener('input', function(e){
    const userName = document.querySelector('.userName');
    const password = document.querySelector('.password');
    const loginBtn = document.querySelector('.loginBtn');

    if (userName.value.length > 0 &&
        password.value.length > 0) {
        loginBtn.classList.add('activeBtn');
    } else {
        loginBtn.classList.remove('activeBtn');
    }
})


