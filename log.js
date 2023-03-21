const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (usernameValue === '') {
    alert('Please enter a username');
    return;
  }

  if (passwordValue === '') {
    alert('Please enter a password');
    return;
  }


 

    let name = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    if(usernameValue === name && passwordValue === password)
    {
        window.location.href = 'loding.html';
    }
    localStorage.clear;



});

