var numberOne = Math.ceil(Math.random() * 9);
var numberTwo = Math.ceil(Math.random() * 9);
var result = numberOne * numberTwo;
var word = document.createElement('div');
word.textContent = numberOne + " \uACF1\uD558\uAE30 " + numberTwo;
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
