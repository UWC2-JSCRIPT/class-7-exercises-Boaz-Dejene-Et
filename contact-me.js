document.addEventListener("DOMContentLoaded", function() {
    // TODO
    let selectContactReason = document.querySelector('#contact-reason')
    let divJobTitle = document.querySelector('.job-title')
    let divWebsite = document.querySelector('.website')
    let divCodingLanguage = document.querySelector('.coding-language')
    let yourName = document.querySelector('#your-name')
    let email = document.querySelector('#email')
    let message = document.querySelector('#your-message')
    let form = document.querySelector('#connect-form')
    let jobTitle = document.querySelector('#job-title')
    let website = document.querySelector('#website')
    let selectCodingLanguage = document.querySelector('#coding-language')
    selectContactReason.addEventListener('change', () => {
        if(selectContactReason.value === 'jobOpportunity') {
            divJobTitle.classList.remove('disable')
            divWebsite.classList.remove('disable')
            divCodingLanguage.classList.add('disable')
        } else if(selectContactReason.value === 'talk') {
            divCodingLanguage.classList.remove('disable')
            divJobTitle.classList.add('disable')
            divWebsite.classList.add('disable')
        }
    })
    yourName.addEventListener('input', (e) => {
        if(yourName.validity.tooShort) {
            yourName.setCustomValidity("Please use 3 or more characters!")
            yourName.reportValidity()
        } else {
            yourName.setCustomValidity("")
        }
    })
    email.addEventListener("input", (e) => {
        if(email.validity.typeMismatch) {
            email.setCustomValidity("Please enter a valid e-mail address!")
            email.reportValidity()
        } else {
            email.setCustomValidity("")
        }
    })
    message.addEventListener('input', (e) => {
        if(message.validity.tooShort) {
            message.setCustomValidity("Please use 10 or more characters!")
            message.reportValidity()
        } else {
            message.setCustomValidity("")
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(yourName.validity.tooShort || yourName.validity.valueMissing) {
            yourName.nextElementSibling.textContent = 'Please insert your correct Name!'
        }
        if(!yourName.validity.tooShort && !yourName.validity.valueMissing) {
            yourName.nextElementSibling.textContent = ''
        }
        if(email.validity.typeMismatch || email.validity.valueMissing) {
            email.nextElementSibling.textContent = 'Please insert your correct Email!'
        }
        if(!email.validity.typeMismatch && !email.validity.valueMissing) {
            email.nextElementSibling.textContent = ''
        }
        if(message.validity.tooShort || message.validity.valueMissing) {
            message.nextElementSibling.textContent = 'Please insert your correct Message format!'
        }
        if(!message.validity.tooShort && !message.validity.valueMissing) {
            message.nextElementSibling.textContent = ''
        }
        if(jobTitle.validity.valueMissing && !divJobTitle.classList.contains('disable')) {
            jobTitle.nextElementSibling.textContent = 'Please insert a correct Job title!'
        }
        if(!jobTitle.validity.valueMissing && !divJobTitle.classList.contains('disable')) {
            jobTitle.nextElementSibling.textContent = ''
        }
        if(!website.validity.valid && !divWebsite.classList.contains('disable')) {
            website.nextElementSibling.textContent = 'Please insert your correct Company website!'
        } 
        if(website.validity.valueMissing && !divWebsite.classList.contains('disable')) {
            website.nextElementSibling.textContent = 'Please insert your correct Company website!'
        }
        if(website.validity.valid && !website.validity.valueMissing && !divWebsite.classList.contains('disable')) {
            website.nextElementSibling.textContent = ''
        }
        if(selectCodingLanguage.validity.valueMissing && !divCodingLanguage.classList.contains('disable')) {
            selectCodingLanguage.nextElementSibling.textContent = 'Please insert a correct Coding language!'
        }
        if(!selectCodingLanguage.validity.valueMissing && !divCodingLanguage.classList.contains('disable')) {
            selectCodingLanguage.nextElementSibling.textContent = ''
        }
    })
})