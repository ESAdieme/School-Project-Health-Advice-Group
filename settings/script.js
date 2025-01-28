const textEditior = document.getElementById('text');

const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');
const option5 = document.getElementById('option-5');

option1.addEventListener('click', () => {
    textEditior.innerHTML = `<form id=Á${option1}.value></form>`
})