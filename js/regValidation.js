const form = document.getElementById('userContent');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordd = document.getElementById('passwordd');
const employeNo = document.getElementById('empNo');
const occupation = document.getElementById('identy');
const company = document.getElementById('comp');
const number = document.getElementById('cellnumber')
const birthday = document.getElementById('birthday');
const startDate = document.getElementById('dateStart');

// Event Listener on button click for validation
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// Selects the query "div" to display error's in
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

// Selects the query "div" to display error's in
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// Email Validation
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Input validation on user Register fields
const validateInputs = () => {
    const firstValue = firstname.value.trim();
    const lastValue = lastname.value.trim();
    const cellValue = number.value.trim();
    const empValue = employeNo.value.trim();
    const occValue = occupation.value.trim();
    const compValue = company.value.trim();
    const birthValue = birthday.value.trim();
    const startValue = startDate.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passworddValue = passwordd.value.trim();

    if(firstValue === '') {
        setError(firstname, 'First name is required');
    } else {
        setSuccess(firstname);
    }
    if(lastValue === '') {
        setError(lastname, 'Last name is required');
    } else {
        setSuccess(lastname);
    }
    if(cellValue === '') {
        setError(number, 'Number is required');
    } else if (cellValue.length < 10) {
        setError(number, 'Cell-number must be 10 digits');
    } else if (cellValue.length > 10) {
        setError(number, 'Cell-number must be 10 digits');
    } else {
        setSuccess(number);
    }
    if(empValue === '') {
        setError(employeNo, 'Employee number is required');
    } else if (empValue.length < 5) {
        setError(employeNo, 'Please insert Correct Emplyee Number');
    } else if (empValue.length > 5) {
        setError(employeNo, 'Please insert Correct Emplyee Number');
    } else {
        setSuccess(employeNo);
    }
    if(occValue === '') {
        setError(occupation, 'Occupation is required');
    } else {
        setSuccess(occupation);
    }
    if(compValue === '') {
        setError(company, 'Company is required');
    } else {
        setSuccess(company);
    }
    if(birthValue === '') {
        setError(birthday, 'Birthday is required');
    } else {
        setSuccess(birthday);
    }
    if(startValue === '') {
        setError(startDate, 'Company start Date is required');
    } else {
        setSuccess(startDate);
    }
    if(emailValue === '') {
        setError(email, 'E-mail is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, "Password must be at least 8 character.");
    } else {
        setSuccess(password);
    }
    if(passworddValue === '') {
        setError(passwordd, 'Please repeat password.');
    } else if (passworddValue != passwordValue ) {
        setError(passwordd, "Password do not match!");
    } else {
        setSuccess(passwordd);
    }
};
// *************************************** Validation Check END ************************************************