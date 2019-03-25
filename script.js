var input1 = document.querySelector('.js-input-1');
var input2 = document.querySelector('.js-input-2');
var submitButton = document.querySelector('.js-submit');
var resultArticle = document.querySelector('.js-result');

submitButton.addEventListener('click', displayResult);
input1.addEventListener('keyup', toggleDisabled);
input2.addEventListener('keyup', toggleDisabled);

function displayResult(event) {
  event.preventDefault();
  var num1 = parseInt(input1.value);
  var num2 = parseInt(input2.value);
  var result = num1 + num2;
  resultArticle.innerText = result;
}

function toggleDisabled(event) {
  if (input1.val !== '' && input2.val !== '') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

