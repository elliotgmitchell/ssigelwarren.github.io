// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Validate the form
        if (validateForm(contactForm)) {
          // If using Formspree, we can let the form submit naturally
          // For demonstration, we'll show a success message
          showFormSuccess(contactForm);
          
          // In a real implementation, we would submit the form:
          contactForm.submit();
        }
      });
    }
  });
  
  // Validate the form fields
  function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    // Clear previous error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
    
    // Validate each required field
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        showError(field, 'This field is required');
      } else if (field.type === 'email' && !isValidEmail(field.value)) {
        isValid = false;
        showError(field, 'Please enter a valid email address');
      }
    });
    
    return isValid;
  }
  
  // Display an error message for a field
  function showError(field, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#d32f2f';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '5px';
    
    field.style.borderColor = '#d32f2f';
    field.parentNode.appendChild(errorElement);
    
    // Remove error when the field is focused
    field.addEventListener('focus', function() {
      field.style.borderColor = '';
      if (errorElement.parentNode) {
        errorElement.parentNode.removeChild(errorElement);
      }
    });
  }
  
  // Show success message after form submission
  function showFormSuccess(form) {
    // Hide the form
    form.style.display = 'none';
    
    // Create and display success message
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.innerHTML = `
      <h3>Thank You!</h3>
      <p>Your message has been sent successfully. I'll get back to you as soon as possible.</p>
      <button id="send-another">Send Another Message</button>
    `;
    successElement.style.textAlign = 'center';
    successElement.style.padding = '30px';
    
    form.parentNode.appendChild(successElement);
    
    // Add event listener to the "Send Another Message" button
    document.getElementById('send-another').addEventListener('click', function() {
      form.reset();
      form.style.display = 'block';
      successElement.remove();
    });
  }
  
  // Email validation using a simple regex
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }