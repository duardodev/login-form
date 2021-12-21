const eyeButton = document.querySelector('#icon-eye')

eyeButton.addEventListener('click', () => {
  let inputPassword = document.querySelector('#pwd')

  if (inputPassword.getAttribute('type') == 'password') {
    inputPassword.setAttribute('type', 'text')
    eyeButton.classList = 'fas fa-eye'
    eyeButton.classList = 'fas fa-eye-slash'
    eyeButton.style.color = '#8257e6'
  } else {
    inputPassword.setAttribute('type', 'password')
    eyeButton.classList = 'fas fa-eye-slash'
    eyeButton.classList = 'fas fa-eye'
    eyeButton.style.color = '#aaa'
  }
})
