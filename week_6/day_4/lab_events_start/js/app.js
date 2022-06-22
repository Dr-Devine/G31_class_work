document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  console.log(this);

  const inputTitle = document.querySelector('#title');
  inputTitle.addEventListener('input', handleTitleInput);

  const inputAuthor = document.querySelector('#author');
  inputAuthor.addEventListener('input', handleAuthorInput);

  const select = document.querySelector('#category');
  select.addEventListener('change', handleSelectChange);

  const save = document.querySelector('#button');
  save.addEventListener('click', handleSaveClick);
});





// const addElement = function(){
//   const newListItem = document.createElement('li');
//   newListItem.textContent = 'Purple';
//   newListItem.classList.add('purple');

// const handleTitleInput = function(event){
//   const readingList = document.querySelector('#reading-list');
//   readingList.textContent = `${event.target.value}`;
// }

// const handleAuthorInput = function(event){
//   const readingList = document.querySelector('#reading-list');
//   readingList.textContent = `${event.target.value};`
// }

// const handleSelectChange = function(event){
//   const readingList = querySelector('#reading-list');
//   readingList.textContent = `${event.target.value}`;
// }
