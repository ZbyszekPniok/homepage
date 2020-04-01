console.log ('Hello!');
const name='Zbyszek Pniok';
const age=39;

console.log (`My name is ${name} and I am ${age} years old`);
console.log ('My name is ' +name+ ` and I am ` +age+ ` years old`);

const header = document.querySelector('.header--js');
console.log (header);

const about = document.querySelector('.about__header');
console.log (about.innerHTML);
about.innerHTML = `My name is ${name} and I am ${age} years old`

const articles = document.querySelectorAll('.article__paragraph');
console.log (articles);

const paragraphs = document.querySelectorAll('p');
console.log (paragraphs[2]);


