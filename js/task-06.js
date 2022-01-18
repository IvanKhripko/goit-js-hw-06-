const validationInputEl = document.querySelector('#validation-input');

validationInputEl.addEventListener('blur', onValidationInputBlur);

function onValidationInputBlur(event) {
  return event.currentTarget.value.length === Number(validationInputEl.dataset.length)
    ? validationInputEl.setAttribute('class', 'valid')
    : validationInputEl.setAttribute('class', 'invalid');
}
