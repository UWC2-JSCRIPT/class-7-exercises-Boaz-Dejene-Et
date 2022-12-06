// TODO
document.addEventListener("DOMContentLoaded", function () {

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const form = document.getElementById('connect-form');

    function checkValidation(e) {
        let currentElement = e.target;
        // console.log(`id:${currentElement.id}, value:${currentElement.value}, length:${currentElement.value.length}
        // , valid:${currentElement.validity.valid}`);
        
        // without this the tool tip keeps showing!
        currentElement.setCustomValidity("");
        if (currentElement.id === 'first-name' ||
            currentElement.id === 'last-name') {
            if (!currentElement.validity.valid) {
                currentElement.setCustomValidity(`Name has to be minimum of ${currentElement.minLength} letters`);
                currentElement.reportValidity();
            }
        } else if (currentElement.id === 'email') {
            if (!currentElement.validity.valid) {
                currentElement.setCustomValidity(`Has to be a valid Email`);
                currentElement.reportValidity();
            }
        }
    }
    firstName.addEventListener('input', checkValidation);
    lastName.addEventListener('input', checkValidation);
    email.addEventListener('input', checkValidation)

    form.addEventListener('submit', (e) => {
        const validationElements = Array.from(document.querySelectorAll('.validate-input'));
        validationElements.forEach(el => {

            if (!el.validity.valid) {
                el.reportValidity();
                e.preventDefault();
            }

        });
    });
});