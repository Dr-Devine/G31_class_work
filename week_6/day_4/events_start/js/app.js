document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');
  console.log(this);

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick);

  const input = document.querySelector('#input');
  input.addEventListener('input', handleTextInput);

  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);
});


const handleButtonClick = function(){
  const paraagraph = document.querySelector('#button-result');
  paraagraph.textContent = 'This is button has totally been clicked, amazing work!';
  // console.log('Button has been clicked');
}

const handleTextInput = function(event){
  const inputParagraph = document.querySelector('#input-result');
  inputParagraph.textContent = `You Typed: ${event.target.value}`;
}

const handleSelectChange = function(event){
  const selectParagraph = document.querySelector('#select-result');
  selectParagraph.textContent = `Your selected: ${event.target.value}`;
}

const handleFormSubmit = function(event){
  event.preventDefault();
  const formparagraph = document.querySelector('#form-result')
  formparagraph.textContent = `Your name is: ${this.first_name.value} ${this.last_name.value}`;
}
