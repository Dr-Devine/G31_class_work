document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    title.textContent = 'JavaScript says Hello!'

    addElement();

    
    

    // const ourElement = document.querySelector('#welcome-paragraph');
    // console.log(ourElement);

    // const redElements = document.querySelectorAll('.red');
    // for(const redElement of redElements) {
    //     redElement.classList.add('bold');
    //     redElement.classList.remove('red');



    // }
    // const greenLi = document.querySelector('li.green');
    // greenLi.textContent = 'Purple';
    // greenLi.classList.remove('green');
    // greenLi.classList.add('purple');


    
});


const addElement = function(){
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Purple';
    newListItem.classList.add('purple');

    const list = document.querySelector('ul');
    // list.appendChild(newListItem);
    const greenLi = document.querySelector('li.green');
    list.insertBefore(newListItem, greenLi);

}


// task:

// Target the green li

// Change the text to Purple
// remove the green class and add purple class to it's classlist
