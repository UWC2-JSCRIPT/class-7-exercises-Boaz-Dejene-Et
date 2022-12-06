// TODO
document.addEventListener("DOMContentLoaded", function() {
	let form = document.querySelector('#connect-form')
	let firstName = document.querySelector('#first-name')
	let lastName = document.querySelector('#last-name')
	let email = document.querySelector('#email')
	let firstNameMsg = document.querySelector('#first-name + small')
	let lastNameMsg = document.querySelector('#last-name + small')
	let emailMsg = document.querySelector('#email + small')
	let emailRegExp = /\w+@\w+\.\w+/
	let firstNameIsValid
	let lastNameIsValid
	let emailIsValid
	firstName.addEventListener('input', () => {
		firstNameIsValid = firstName.value.length >= 3
		if(!firstNameIsValid) {
			firstName.classList.add('invalid')
			firstNameMsg.textContent = `Please use 3 or more characters!. Number of characters is ${firstName.value.length}`
		} else {
			firstName.classList.remove('invalid')
			firstNameMsg.textContent = ''
		}
	})
	lastName.addEventListener('input', () => {
		lastNameIsValid = lastName.value.length >= 3
		if(!lastNameIsValid) {
			lastName.classList.add('invalid')
			lastNameMsg.textContent = `Please use 3 or more characters!. Number of characters is ${lastName.value.length}`
		} else {
			lastName.classList.remove('invalid')
			lastNameMsg.textContent = ''
		}
	})
	email.addEventListener("input", () => {
		emailIsValid = email.value.length === 0 || emailRegExp.test(email.value)
		if(!emailIsValid) {
			email.classList.add('invalid')
			emailMsg.textContent = 'Please enter a valid email address'
		} else {
			email.classList.remove('invalid')
			emailMsg.textContent = ''
		}
	})
	form.addEventListener("submit", (event) => {
		event.preventDefault()
		if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
			console.log('Bad input')
		} else {
			console.log('Form successfully submitted!')
		}
		
	})
})