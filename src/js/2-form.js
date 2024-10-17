
let formValue = {
    email: '',
    message: ''
  };
  
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
 
  document.addEventListener('DOMContentLoaded', populateForm);
  
  function populateForm() {
    const savedData = localStorage.getItem('feedback-form-state');
  
    if (savedData) {
      formValue = JSON.parse(savedData);
      emailInput.value = formValue.email || '';
      messageInput.value = formValue.message || '';
    }
  }
  
  form.addEventListener('input', event => {
    formValue[event.target.name] = event.target.value.trim(); 
  
   localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
  });
  
 
  form.addEventListener('submit', event => {
    event.preventDefault();
  
   
    if (!formValue.email || !formValue.message) {
      alert('Fill please all fields');
      return;
    }
  
   
    localStorage.removeItem('feedback-form-state');
    formValue = { email: '', message: '' };
    form.reset();
  });