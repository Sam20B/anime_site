function detectCapsLock() {
  const inputField = document.querySelector('.i2');
  const capsLockMessage = document.getElementsByClassName('caps')[0];
  
  inputField.addEventListener('keydown', function(event) {
      const capsLockOn = event.getModifierState('CapsLock');
      if (capsLockOn) {
          capsLockMessage.style.display = 'block';
      } else {
          capsLockMessage.style.display = 'none';
      }
  });
}

detectCapsLock();

function switchImage1() {
  const firstImage = document.getElementsByClassName('img1')[0];
  const secondImage = document.getElementsByClassName('img2')[0];

  firstImage.addEventListener('click', function() {
      firstImage.style.display = 'none';
      secondImage.style.display = 'block';
  });
}

switchImage1();

function switchImage2() {
  const firstImage = document.getElementsByClassName('img1')[0];
  const secondImage = document.getElementsByClassName('img2')[0];

  secondImage.addEventListener('click', function() {
      secondImage.style.display = 'none';
      firstImage.style.display = 'block';
  });
}

switchImage2();

function togglePassword1() {
  const passwordField = document.getElementsByClassName('i2')[0];
  const hidePasswordImage = document.getElementsByClassName('img1')[0];
  const showPasswordImage = document.getElementsByClassName('img2')[0];

  showPasswordImage.addEventListener('click', function() {
      passwordField.type = 'password';
      hidePasswordImage.style.display = 'none';
      showPasswordImage.style.display = 'block';
  });

}

togglePassword1();

function togglePassword2() {
  const passwordField = document.getElementsByClassName('i2')[0];
  const hidePasswordImage = document.getElementsByClassName('img1')[0];
  const showPasswordImage = document.getElementsByClassName('img2')[0];

  hidePasswordImage.addEventListener('click', function() {
    passwordField.type = 'text';
    hidePasswordImage.style.display = 'block';
    showPasswordImage.style.display = 'none';
});
}

togglePassword2();