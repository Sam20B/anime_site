function focusInput() {
    const inputContainer = document.querySelector(".cont");
    const inputField = document.getElementById(".i1");
    const inputLabel = document.querySelector(".l1");
    
    inputContainer.classList.add("clicked");
    
    if (inputField.value.trim() !== '') {
      inputLabel.style.top = "7%";
      inputLabel.style.fontSize = "18px";
    }
  }
  