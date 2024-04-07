// Function to open a new page with content "Test" - change it to open a new page in the same tab to avoid opening multiple tabs //
function toggleMenu() {
    var mainNav = document.getElementById('main-nav');
    mainNav.classList.toggle('collapsing');
}

// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("donate-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById('firstName').addEventListener('input', function () {
    validateForm();
});

document.getElementById('lastName').addEventListener('input', function () {
    validateForm();
});


document.getElementById('accountNumber').addEventListener('input', function () {
    validateForm();
});

document.getElementById('cvv').addEventListener('input', function () {
    validateForm();
});

document.getElementById('cardNumber').addEventListener('input', function () {
    validateForm();
});

document.getElementById('expiryDate').addEventListener('input', function () {
    validateForm();
});

document.getElementById('amount').addEventListener('input', function () {
    validateForm();
});

// validation function
function validateForm() {
    //getting the form element
    var form = document.getElementById('donationForm');


    //getting values from the form
    var firstName = form.elements['firstName'].value;
    var lastName = form.elements['lastName'].value;
    var accountNumber = form.elements['accountNumber'].value;
    var cvv = form.elements['cvv'].value;
    var cardNumber = form.elements['cardNumber'].value;
    var expiryDate = form.elements['expiryDate'].value;
    var amount = form.elements['amount'].value;

    //tracking form validation state
    var isValid = true;
    var firstNameError = document.getElementById('firstNameError');
    var lastNameError = document.getElementById('lastNameError');
    var accountNumberError = document.getElementById('accountNumberError');
    var cvvError = document.getElementById('cvvError');
    var cardNumberError = document.getElementById('cardNumberError');
    var expiryDateError = document.getElementById('expiryDateError');
    var amountError = document.getElementById('amountError');

    if (firstName.trim() === '') {
        firstNameError.textContent = 'First Name is required';
        firstNameError.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('firstNameError').textContent = '';
    }

    if (lastName.trim() === '') {
        lastNameError.textContent = 'Last Name is required';
        lastNameError.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('lastNameError').textContent = '';
    }

    if (accountNumber.trim() === '') {
        accountNumberError.textContent = 'Account Number is required';
        accountNumberError.classList.add('error');
        isValid = false;
    } else if (accountNumber.length < 10) {
        accountNumberError.textContent = 'Account Number should be 10 digits';
        accountNumberError.classList.add('error');
        isValid = false;
    }
    else {
        accountNumberError.textContent = '';
    }

    if (cvv.trim() === '') {
        cvvError.textContent = 'CVV is required';
        cvvError.classList.add('error');
        isValid = false;
    } else if (cvv.length < 3 || cvv.length > 5) {
        cvvError.textContent = 'CVV should be between 3 and 5 digits';
        cvvError.classList.add('error');
        isValid = false;
    }
    else {
        document.getElementById('cvvError').textContent = '';
    }

    if (cardNumber.trim() === '') {
        cardNumberError.textContent = 'Card Number is required';
        cardNumberError.classList.add('error');
        isValid = false;
    } else if (cardNumber.length < 16 || cardNumber.length > 19) {
        cardNumberError.textContent = 'Card Number should be between 16 and 19 digits';
        cardNumberError.classList.add('error');
        isValid = false;
    }
    else {
        document.getElementById('cardNumberError').textContent = '';
    }

    var currentDate = new Date();
    var expiredDateToDate = new Date(expiryDate);


    console.log(currentDate);


    if (expiryDate.trim() === '') {
        expiryDateError.textContent = 'Expiry Date is required';
        expiryDateError.classList.add('error');
        isValid = false;
    } else if (currentDate > expiredDateToDate) {
        expiryDateError.textContent = 'Expiry Date should be in the future';
        expiryDateError.classList.add('error');
        isValid = false;
    }
    else {
        document.getElementById('expiryDateError').textContent = '';
    }

    if (amount.trim() === '') {
        amountError.textContent = 'Amount is required';
        amountError.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('amountError').textContent = '';
    }

    return isValid;
}