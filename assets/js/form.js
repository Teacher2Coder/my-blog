// Selects elements on the page
const submitButton = document.querySelector('#submit');
const message = document.querySelector('#message');

// Selects user input fields
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// Retreives current storage if any
let blogStorage = JSON.parse(localStorage.getItem('blogs'));

// If storage is empty, create this object and store it
// This first obbject will NOT be displayed on the blogs page
if (blogStorage == null) {
    let blogStore = {
        postTitles: ["Hidden Title"],
        postAuthors: ["Hidden Author"],
        postContent: ["Hidden Content"],
    }
    localStorage.setItem('blogs', JSON.stringify(blogStore));
} ;

// When the 'submit button is clicked, the user's input is collected and pushed into the variables above,
// then it is stringified and added to local storage.
submitButton.addEventListener('click', function (event) {
    // Prevents default action
    event.preventDefault();

    // Retrieves blogs from local storage
    let blogStorage = JSON.parse(localStorage.getItem('blogs'));

    // Push user inputs into object
    blogStorage.postTitles.push(titleInput.value);
    blogStorage.postAuthors.push(usernameInput.value);
    blogStorage.postContent.push(contentInput.value);

    // Stores User inputs as a string
    localStorage.setItem('blogs', JSON.stringify(blogStorage));
    
    // Clears input fields
    usernameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";

    // Takes user to the blog page
    window.location.assign("blog.html");
} ) ;