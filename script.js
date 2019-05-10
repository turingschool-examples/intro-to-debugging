var input1 = document.querySelector('.js-input-1');
var input2 = document.querySelector('.js-input-2');
var submitButton = document.querySelector('.js-submit');
var resultArticle = document.querySelector('.js-result');

submitButton.addEventListener('click', displayResult);

function displayResult(event) {
  event.preventDefault();
  var num1 = input1.value;
  var num2 = input2.value;
  var result = num1 + num2;
  resultArticle.value = result;
}

