const submitButton = document.querySelector('#submit');
const message = document.querySelector('#message');

const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// Retreives current storage
let titleStore = JSON.parse(localStorage.getItem('titles'));
let authorStore = JSON.parse(localStorage.getItem('authors'));
let contentStore = JSON.parse(localStorage.getItem('content'));

// When the 'submit button is clicked, the user's input is collected and pushed into the variables above,
// then it is stringified and added to local storage.
submitButton.addEventListener('click', function (event) {
    // Prevents default action
    event.preventDefault();

    // collect user input and store as variable
    titleStore.push(titleInput.value);
    authorStore.push(usernameInput.value);
    contentStore.push(contentInput.value);
    
    // Stores blog post data as strings in local storage
    localStorage.setItem('titles', JSON.stringify(titleStore));
    localStorage.setItem('authors', JSON.stringify(authorStore));
    localStorage.setItem('content', JSON.stringify(contentStore));

    // Renders message to navigate over to the blog
    message.textContent = `Thank you, ${usernameInput.value}! Navigate over to the blog page to see your work!`;

    // Erases input fields
    usernameInput.value = '';
    titleInput.value = '';
    contentInput.value = '';
} ) ;