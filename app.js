const form = document.querySelector("form");
const emailInput = document.querySelector("#emailinput");
const emailError = document.querySelector("#emailerror");
const countryInput = document.querySelector("#countryinput");
const countryError = document.querySelector("#countryerror");
const zipInput = document.querySelector("#zipinput");
const zipError = document.querySelector("#ziperror");
const pwdInput = document.querySelector("#passwordinput");
const pwdError = document.querySelector("#pwderror");
const pwdCInput = document.querySelector("#passwordconfirminput");
const pwdCError = document.querySelector("#pwdcerror");
const submitBtn = document.querySelector("button");

function showEmailError() {
    emailError.classList.add("showing");
    if (emailInput.validity.valueMissing) {
        emailError.textContent = "You need to enter an e-mail address.";
    }
    else if (emailInput.validity.typeMismatch) {
        console.log("N");
        emailError.textContent = "Entered value needs to be an e-mail address.";
    }

}

function showCountryError() {
    countryError.classList.add("showing");
    if (countryInput.validity.valueMissing) {
        countryError.textContent = "You need to enter your Country.";
    }
}

function showZipError() {
    zipError.classList.add("showing");
    if (zipInput.validity.valueMissing) {
        zipError.textContent = "You need to enter your 5 digit ZIP code.";
    }
    else if (zipInput.value.length !== 5) {
        zipError.textContent = "ZIP code must be 5 digits.";
    }
}

function showPwdEror() {
    pwdError.classList.add("showing");
    if (pwdInput.validity.valueMissing) {
        pwdError.textContent = "Please enter your password.";
    }
    else if (pwdInput.validity.tooShort) {
        pwdError.textContent = "Password must be 8 spaces or more.";
    }
}

function showPwdCError() {
    pwdCError.classList.add("showing");
    console.log("broke");
    let password = pwdInput.value;
    if (pwdCInput.validity.valueMissing) {
        pwdCError.textContent = "Please Confirm your password.";
    }
    else if (pwdCInput.value !== password) {
        pwdCError.textContent = "Passwords do not match.";
    }
}

emailInput.addEventListener("input", function() {
    if (emailInput.validity.valid) {
        emailError.textContent = "";
        emailError.classList.remove("showing");
        emailInput.classList.add("gtg");
    } else {
        showEmailError();
    }
})

countryInput.addEventListener("input", function() {
    if (countryInput.validity.valid) {
        countryError.textContent = "";
        countryError.classList.remove("showing");
        countryInput.classList.add("gtg");
    } else {
        showCountryError();
    }
})

zipInput.addEventListener("input", function() {
    if (zipInput.validity.valid && zipInput.value.length == 5) {
        zipError.textContent = "";
        zipError.classList.remove("showing");
        zipInput.classList.add("gtg");
    } else {
        showZipError();
    }
})

pwdInput.addEventListener("input", function() {
    if (pwdInput.validity.valid) {
        pwdError.textContent = "";
        pwdError.classList.remove("showing");
        pwdInput.classList.add("gtg");
    } 
    if (pwdInput.value !== pwdCInput.value) {
        showPwdCError();
    } 
    if (!pwdInput.validity.valid) {
        showPwdEror();
    }
})

pwdCInput.addEventListener("input", function() {
    if (pwdCInput.validity.valid && pwdInput.value == pwdCInput.value) {
        pwdCError.textContent = "";
        pwdCError.classList.remove("showing");
        pwdCInput.classList.add("gtg");
    } else {
        return showPwdCError();
    }
})

form.addEventListener("submit", function(event) {
    
    if (!emailInput.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
    if (!countryInput.validity.valid) {
        showCountryError();
        event.preventDefault();
    }
    if (!zipInput.validity.valid || zipInput.value.length !== 5) {
        showZipError();
        event.preventDefault();
    }
    if (!pwdInput.validity.valid) {
        showPwdEror();
        event.preventDefault();
    }
    if (!pwdCInput.validity.valid || pwdInput.value !== pwdCInput.value) {
        showPwdCError();
        event.preventDefault();
    }
})