const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// проверяем, есть ли пользователь уже зарегистрирован
if (localStorage.getItem('username')) {
  alert(`You are already registered as "${localStorage.getItem('username')}".`);
}

// обработчик отправки формы
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault(); // отменяем стандартное поведение браузера

  // получаем значения из полей
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // проверяем, не пустые ли поля
  if (!usernameValue || !passwordValue) {
    alert('Please fill in all fields.');
    return;
  }

  localStorage.setItem('username', usernameValue);
  localStorage.setItem('password', passwordValue);

  // выводим сообщение о успешной регистрации
  alert('You have successfully registered.');

  console.log(localStorage.getItem('username'));
  window.location.href = 'log.html';

});