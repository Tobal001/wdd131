
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        alert('You cannot leave this blank');
        return;
    }
    
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    listItem.textContent = input.value;
    deleteButton.textContent = '❌';

    listItem.append(deleteButton);

    list.append(listItem);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });

});
