let btn = document.querySelector('.for')

let login = document.querySelector('.login');
let password = document.querySelector('.password');


btn.addEventListener('click', () => {
    if (login.value === '123456'  && password.value === '7890') {
        alert('id va password togri')
    } else {
        alert('id yoki pasword hato')
    }
})