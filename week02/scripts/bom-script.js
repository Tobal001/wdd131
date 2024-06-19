
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const listItem = document.createElement('li');
const deleteButton = document.createElement('button');

listItem.textContent = input.value;
deleteButton.textContent = '❌';

listItem.append(deleteButton);
list.append(li);