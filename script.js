document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

document.getElementsByClassName('close-btn')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    // Address validation
    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address === '') {
        addressError.textContent = 'Address is required';
        addressError.style.display = 'block';
        isValid = false;
    } else {
        addressError.style.display = 'none';
    }

    // Phone number validation
    const phoneRegex = /^\+94\d{9}$/;
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Phone number must start with +94 and be followed by 9 digits';
        phoneError.style.display = 'block';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }
 // Email validation
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const email = document.getElementById('email').value;
 const emailError = document.getElementById('emailError');
 if (!emailRegex.test(email)) {
     emailError.textContent = 'Invalid email format';
     emailError.style.display = 'block';
     isValid = false;
 } else {
     emailError.style.display = 'none';
 }

 // Message validation
 const message = document.getElementById('message').value;
 const messageError = document.getElementById('messageError');
 if (message.length < 10) {
     messageError.textContent = 'Message must be at least 10 characters long';
     messageError.style.display = 'block';
     isValid = false;
 } else {
     messageError.style.display = 'none';
 }
 if (isValid) {
    const contactData = {
        name: name,
        address: address,
        phone: phone,
        email: email,
        message: message
    };

    localStorage.setItem('contactData', JSON.stringify(contactData));
    alert('Contact data submitted successfully!');
    document.getElementById('modal').style.display = 'none';
}
});