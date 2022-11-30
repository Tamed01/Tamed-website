const createButt = document.getElementById('createButtForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const cellNum = document.getElementById('cellNum');
const userBirthday = document.getElementById('userBirthday');
const userId = document.getElementById('userId');
const userGenderSelect = document.getElementById('userGenderSelect');
const userProvince = document.getElementById('userProvince');
const userCity = document.getElementById('userCity');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPass = document.getElementById('userPass');
const userPassRe = document.getElementById('userPassRe');


// Event Listener on button click for validation
createButt.addEventListener('submit', e => {
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
  const firstValue = firstName.value.trim();
  const lastValue = lastName.value.trim();
  const cellValue = cellNum.value.trim();
  const birthValue = userBirthday.value.trim();
  const idValue = userId.value.trim();
  const genderValue = userGenderSelect.value.trim();
  const provinceValue = userProvince.value.trim();
  const cityValue = userCity.value.trim();
  const nameValue = userName.value.trim();
  const emailValue = userEmail.value.trim();
  const pssValue = userPass.value.trim();
  const passReValue = userPassRe.value.trim();

  if(firstValue === '') {
      setError(firstName, 'First name is required');
  } else {
      setSuccess(firstName);
  }
  if(lastValue === '') {
      setError(lastName, 'Last name is required');
  } else {
      setSuccess(lastName);
  }
  if(cellValue === '') {
      setError(cellNum, 'Number is required');
  } else if (cellValue.length < 10) {
      setError(cellNum, 'Cell-number must be 10 digits');
  } else if (cellValue.length > 10) {
      setError(cellNum, 'Cell-number must be 10 digits');
  } else {
      setSuccess(cellNum);
  }
};
// *************************************** Validation Check END ************************************************


// *********************************** User Selection Validations Start ****************************************
function Checker(el){

    const select = document.getElementById('userCity');
    removeOptions(select);
    if(el.value == '1'){
        var option1 = document.createElement("option");
          option1.text = "Alice";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Butterworth";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "East London";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Graaff-Reinet";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Grahamstown";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "King William’s Town";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Mthatha";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Port Elizabeth";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Queenstown";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Uitenhage";
          option1.value = "1";
          select.add(option1);
        var option1 = document.createElement("option");
          option1.text = "Zwelitsha";
          option1.value = "1";
          select.add(option1);
    }else if(el.value == '2'){
        var option2 = document.createElement("option");
          option2.text = "Bethlehem";
          option2.value = "2";
          select.add(option2);
        var option2 = document.createElement("option");
          option2.text = "Bloemfontein";
          option2.value = "2";
          select.add(option2);
        var option2 = document.createElement("option");
          option2.text = "Jagersfontein";
          option2.value = "2";
          select.add(option2); 
        var option2 = document.createElement("option");
          option2.text = "Kroonstad";
          option2.value = "2";
          select.add(option2); 
        var option2 = document.createElement("option");
          option2.text = "Odendaalsrus";
          option2.value = "2";
          select.add(option2); 
        var option2 = document.createElement("option");
          option2.text = "Parys";
          option2.value = "2";
          select.add(option2); 
        var option2 = document.createElement("option");
          option2.text = "Phuthaditjhaba";
          option2.value = "2";
          select.add(option2);
        var option2 = document.createElement("option");
          option2.text = "Sasolburg";
          option2.value = "2";
          select.add(option2);
        var option2 = document.createElement("option");
          option2.text = "Virginia";
          option2.value = "2";
          select.add(option2);
        var option2 = document.createElement("option");
          option2.text = "Welkom";
          option2.value = "2";
          select.add(option2);
    }else if(el.value == '3'){
        var option3 = document.createElement("option");
          option3.text = "Benoni";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Boksburg";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Brakpan";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Carletonville";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Germiston";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Johannesburg";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Krugersdorp";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Pretoria";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Randburg";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Randfontein";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Roodepoort";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Soweto";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Springs";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Vanderbijlpark";
          option3.value = "3";
          select.add(option3);
        var option3 = document.createElement("option");
          option3.text = "Vereeniging";
          option3.value = "3";
          select.add(option3);
    }else if(el.value == '4'){
        var option4 = document.createElement("option");
          option4.text = "Durban";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Empangeni";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Ladysmith";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Newcastle";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Pietermaritzburg";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Pinetown";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Ulundi";
          option4.value = "4";
          select.add(option4);
        var option4 = document.createElement("option");
          option4.text = "Umlazi";
          option4.value = "4";
          select.add(option4);
    }else if(el.value == '5'){
        var option5 = document.createElement("option");
          option5.text = "Giyani";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Lebowakgomo";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Musina";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Phalaborwa";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Polokwane";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Seshego";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Sibasa";
          option5.value = "5";
          select.add(option5);
        var option5 = document.createElement("option");
          option5.text = "Thabazimbi";
          option5.value = "5";
          select.add(option5);
    }else if(el.value == '6'){
        var option6 = document.createElement("option");
          option6.text = "Emalahleni";
          option6.value = "6";
          select.add(option6);
        var option6 = document.createElement("option");
          option6.text = "Nelspruit";
          option6.value = "6";
          select.add(option6);
        var option6 = document.createElement("option");
          option6.text = "Secunda";
          option6.value = "6";
          select.add(option6);
    }else if(el.value == '7'){
        var option7 = document.createElement("option");
          option7.text = "Klerksdorp";
          option7.value = "7";
          select.add(option7);
        var option7 = document.createElement("option");
          option7.text = "Mahikeng";
          option7.value = "7";
          select.add(option7);
        var option7 = document.createElement("option");
          option7.text = "Mmabatho";
          option7.value = "7";
          select.add(option7);
        var option7 = document.createElement("option");
          option7.text = "Potchefstroom";
          option7.value = "7";
          select.add(option7);
        var option7 = document.createElement("option");
          option7.text = "Rustenburg";
          option7.value = "7";
          select.add(option7);
    }else if(el.value == '8'){
        var option8 = document.createElement("option");
          option8.text = "Kimberley";
          option8.value = "8";
          select.add(option8);
        var option8 = document.createElement("option");
          option8.text = "Kuruman";
          option8.value = "8";
          select.add(option8);
        var option8 = document.createElement("option");
          option8.text = "Port Nolloth";
          option8.value = "8";
          select.add(option8);
    }else if(el.value == '9'){
        var option9 = document.createElement("option");
          option9.text = "Bellville";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Cape Town";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Constantia";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "George";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Hopefield";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Oudtshoorn";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Paarl";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Simon’s Town";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Stellenbosch";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Swellendam";
          option9.value = "9";
          select.add(option9);
          var option9 = document.createElement("option");
          option9.text = "Worcester";
          option9.value = "9";
          select.add(option9);
    }
}
  
  
function removeOptions(selectElement) {
                var i, L = selectElement.options.length - 1;
                for (i = L; i >= 0; i--) {
                    selectElement.remove(i);
                }
}
// ***************************************** User Selection Validations END **************************************

