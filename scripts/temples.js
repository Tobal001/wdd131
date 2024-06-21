
//Footer
const year = document.querySelector("#year");
const today = new Date();

const lastModifiedElement = document.getElementById('lastModifiedDate');
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();
//Gets current Year with copyright symbol and authors name
year.innerHTML = `&copy <span>${today.getFullYear()}</span> &#128051 Cristobal Henriquez &#128051 Canada`;
//Computes last modified time & date
lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});