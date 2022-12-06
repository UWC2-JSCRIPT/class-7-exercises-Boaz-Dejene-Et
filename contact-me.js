document.addEventListener("DOMContentLoaded", function() {
    // TODO
    let selectReason = document.querySelector('#reason')
    let divJobTitle = document.querySelector('.job-title')
    let divWebsite = document.querySelector('.website')
    let divLanguage = document.querySelector('.language')
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let message = document.querySelector('#message')
    let form = document.querySelector('#connect-form')
    let jobTitle = document.querySelector('#job-title')
    let website = document.querySelector('#website')
    let selectLanguage = document.querySelector('#language')
	let emailRegExp = /\w+@\w+\.\w+/
    let websiteRegExp = /https?\:\/\/.+\..+/
    selectReason.addEventListener('change', () => {
        if(selectReason.value === 'choose') {
            divJobTitle.classList.add('is-invalid')
            name.nextElementSibling.textContent = 'Please select a your Reason!'
        } else if(selectReason.value === 'jobOpportunity') {
            divJobTitle.classList.remove('disable')
            divWebsite.classList.remove('disable')
            divLanguage.classList.add('disable')
            selectReason.classList.remove('is-invalid')
            selectReason.nextElementSibling.textContent = ""
        } else if(selectReason.value === 'talk') {
            divLanguage.classList.remove('disable')
            divJobTitle.classList.add('disable')
            divWebsite.classList.add('disable')
            selectReason.classList.remove('is-invalid')
            selectReason.nextElementSibling.textContent = ""
        }
    })

    selectLanguage.addEventListener('change', () => {
        if(!selectLanguage.valueMissing) {
            selectLanguage.classList.remove("is-invalid")
            selectLanguage.nextElementSibling.textContent = ''
        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if(name.validity.tooShort || name.validity.valueMissing) {
            name.nextElementSibling.textContent = 'Please insert your correct Name!'
			name.classList.add('is-invalid')
        } else {
            name.classList.remove('is-invalid')
            name.nextElementSibling.textContent = ''
        }
        if(!emailRegExp.test(email.value) || email.validity.typeMismatch || email.validity.valueMissing) {
            email.nextElementSibling.textContent = 'Please insert your correct Email!'
			email.classList.add('is-invalid')
        } else {
            email.nextElementSibling.textContent = ''
            email.classList.remove('is-invalid')
        }
        if(selectReason.value === 'choose') {
            selectReason.nextElementSibling.textContent = 'Please select a your Reason!'
            selectReason.classList.add('is-invalid')
        } else if(selectReason.value === 'talk') {
            selectReason.classList.remove('is-invalid')
        }
        if(divJobTitle.classList.contains('disable')) {
            jobTitle.nextElementSibling.textContent = ''
            jobTitle.classList.remove("is-invalid")
        } else if(jobTitle.validity.valueMissing || jobTitle.validity.tooShort) {
            jobTitle.nextElementSibling.textContent = 'Please insert a correct Job title!'
            jobTitle.classList.add('is-invalid')
        } else {
            jobTitle.nextElementSibling.textContent = ''
            jobTitle.classList.remove('is-invalid')
        }
        if(divWebsite.classList.contains('disable')) {
            website.nextElementSibling.textContent = ''
            website.classList.remove('is-invalid')
        } else if(websiteRegExp.test(website.value) || website.validity.valueMissing || !website.validity.valid) {
            website.nextElementSibling.textContent = 'Please insert your correct Website!'
			website.classList.add('is-invalid')
        } else {
            website.classList.remove('is-invalid')
        }
        if(divLanguage.classList.contains('disable')) {
            selectLanguage.nextElementSibling.textContent = ''
            selectLanguage.classList.remove('is-invalid')
        } else if(selectLanguage.validity.valueMissing) {
            selectLanguage.nextElementSibling.textContent = 'Please select Coding language!'
			selectLanguage.classList.add('is-invalid')
        } else {
            selectLanguage.nextElementSibling.textContent = ''
            selectLanguage.classList.remove('is-invalid')
        }
        if(message.validity.tooShort || message.validity.valueMissing) {
            message.nextElementSibling.textContent = 'Please insert your correct Message format!'
			message.classList.add('is-invalid')
        } else {
            message.nextElementSibling.textContent = ''
			message.classList.remove('is-invalid')
        }
    })
})