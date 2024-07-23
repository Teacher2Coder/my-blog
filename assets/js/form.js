// Selects elements on the page
const submitButton = document.querySelector('#submit');
const message = document.querySelector('#message');

// Selects user input fields
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// Retreives current storage
// let titleStore = JSON.parse(localStorage.getItem('titles'));
// let authorStore = JSON.parse(localStorage.getItem('authors'));
// let contentStore = JSON.parse(localStorage.getItem('content'));

let blogStore = {
    titleStore: [],
    authorStore: [],
    contentStore: [],
} ;

// When the 'submit button is clicked, the user's input is collected and pushed into the variables above,
// then it is stringified and added to local storage.
submitButton.addEventListener('click', function (event) {
    // Prevents default action
    event.preventDefault();

    if (usernameInput.value == "") {
        message.textContent = "Please enter username."
    } else if (titleInput.value == "") {
        message.textContent = "Please enter a title for your post."
    } else if (contentInput.value == "") {
        message.textContent = "Please enter content for your post."
    } else {
        // collect user input and store as variable
        blogStore.titleStore.push(titleInput.value);
        blogStore.authorStore.push(usernameInput.value);
        blogStore.contentStore.push(contentInput.value);
    
        // Stores blog post data as strings in local storage
        localStorage.setItem('blogs', JSON.stringify(blogStore));
        // Takes user to the blog page
        // UNCOMMENT LINE BELOW BEFORE SUBMISSION!!!!!!
        // window.location.assign("blog.html")
    }
} ) ;