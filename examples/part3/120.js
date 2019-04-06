const numberRegExp = /[0-9]+/;
const phoneRegExp = /\d{3}-\d{3,4}-\d{4}$/;
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numberRegExp.test(12345));
console.log(numberRegExp.test('test'));
console.log(phoneRegExp.test('010-3003-0046'));
console.log(phoneRegExp.test('02-8844-1234'));
console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test-javascript'));