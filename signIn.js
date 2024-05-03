function focusInput() {
  document.getElementById('username').focus();
}
function username(){
  const name = document.getElementsByClassName('i1').value[0];

}
function toggleImage() {
  const myImage = document.getElementsByClassName('img1')[0];
  const secondImageSrc = 'https://cdn-icons-png.flaticon.com/128/8771/8771414.png';
  let isSecondImage = false;

  myImage.addEventListener('click', function () {
      if (isSecondImage) {
          myImage.src = 'first-image.jpg'; // Change back to the first image
          isSecondImage = false;
      } else {
          myImage.src = secondImageSrc; // Change to the second image
          isSecondImage = true;
      }
  });
}

//document.addEventListener('DOMContentLoaded', toggleImage);

function detectCapsLock() {
  const inputField = document.getElementsByClassName('i2')[0];
  inputField.addEventListener('keydown', function(event) {
      const capsLockState = event.getModifierState('CapsLock');
      if (capsLockState) {
          console.log('Caps Lock is ON');
      } else {
          console.log('Caps Lock is OFF');
      }
  });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', detectCapsLock);
