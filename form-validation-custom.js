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
			firstName.classList.add('is-invalid')
			firstName.parentNode.className = "invalid"
			firstNameMsg.textContent = `Please use 3 or more characters!. Number of characters is ${firstName.value.length}`
		} else {
			firstName.classList.remove('is-invalid')
			firstName.parentNode.className = "form-group"
			firstNameMsg.textContent = ''
		}
	})
	lastName.addEventListener('input', () => {
		lastNameIsValid = lastName.value.length >= 3
		if(!lastNameIsValid) {
			lastName.classList.add('is-invalid')
			firstName.parentNode.className = "invalid"
			lastNameMsg.textContent = `Please use 3 or more characters!. Number of characters is ${lastName.value.length}`
		} else {
			lastName.classList.remove('is-invalid')
			firstName.parentNode.className = "form-group"
			lastNameMsg.textContent = ''
		}
	})
	email.addEventListener("input", () => {
		emailIsValid = email.value.length === 0 || emailRegExp.test(email.value)
		if(!emailIsValid) {
			email.classList.add('is-invalid')
			emailMsg.textContent = 'Please enter a valid email address'
		} else {
			email.classList.remove('is-invalid')
			emailMsg.textContent = ''
		}
	})
	form.addEventListener("submit", (e) => {
		e.preventDefault()
		if(!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
			console.log('Bad input')
			console.log(firstName.value, lastName.value, email.value)
		} else {
			console.log('Form successfully submitted!')
		}
		
	})
})