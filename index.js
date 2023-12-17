const par = document.getElementById('parent');
const bookList = document.getElementById('bookList');

function addBook() {
    const titleValue = document.getElementById('title').value;
    const authorValue = document.getElementById('author').value;

    if (titleValue.trim() !== '' && authorValue.trim() !== '') {
        const newEntry = document.createElement('div');

        const titleElement = document.createElement('p');
        const titleTextNode = document.createTextNode('Title: ' + titleValue);
        titleElement.appendChild(titleTextNode);

        const authorElement = document.createElement('p');
        const authorTextNode = document.createTextNode('Author: ' + authorValue);
        authorElement.appendChild(authorTextNode);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () {
            newEntry.remove();
        };

        newEntry.appendChild(titleElement);
        newEntry.appendChild(authorElement);
        newEntry.appendChild(removeButton);

        bookList.appendChild(newEntry);

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
    } else {
        alert('Please enter both title and author.');
    }
}
