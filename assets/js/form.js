const submitButton = document.querySelector('#submit');

const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

let titleStore = [];
let authorStore = [];
let contentStore = [];

// When the 'submit button is clicked, the user's input is collected and pushed into an object,
// then it is stringified and added to local storage.
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    // collect user input and store as variable
    titleStore.push(titleInput.value);
    authorStore.push(usernameInput.value);
    contentStore.push(contentInput.value);
    
    // Stores blog post data as strings in local storage
    localStorage.setItem('titles', JSON.stringify(titleStore));
    localStorage.setItem('authors', JSON.stringify(authorStore));
    localStorage.setItem('content', JSON.stringify(contentStore));
} ) ;