const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterlist() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        chaptersArray.push(input.value); // Add the new chapter to the array
        displayList(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    listItem.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    listItem.append(deleteButton);
    list.append(listItem);

    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        deleteChapter(item); // Pass the item directly
        input.focus();
    });
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChapterlist() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
