function focusInput() {
  document.getElementById('username').focus();
}
function username(){
  const name = document.getElementsByClassName('i1').value[0];

}

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
  const firstImage = document.getElementsByClassName('img2')[0];
  const secondImage = document.getElementsByClassName('img1')[0];

  firstImage.addEventListener('click', function() {
      firstImage.style.display = 'none';
      secondImage.style.display = 'block';
  });
}

switchImage2();

function togglePassword() {
  const passwordField = document.getElementsByClassName('i2');
  const showPasswordImage = document.getElementById('img2');
  const hidePasswordImage = document.getElementById('img1');

  showPasswordImage.addEventListener('click', function() {
      passwordField.type = 'text';
      showPasswordImage.style.display = 'none';
      hidePasswordImage.style.display = 'inline';
  });

  hidePasswordImage.addEventListener('click', function() {
      passwordField.type = 'password';
      hidePasswordImage.style.display = 'none';
      showPasswordImage.style.display = 'inline';
  });
}

togglePassword();

