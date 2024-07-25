// Selects elements on the page
const submitButton = document.querySelector('#submit');
const message = document.querySelector('#message');

// Selects user input fields
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');

// Retreives current storage if any
let blogStorage = JSON.parse(localStorage.getItem('blogs'));

// When the 'submit button is clicked, the user's input is collected and pushed into the variables above,
// then it is stringified and added to local storage.
submitButton.addEventListener('click', function (event) {
    // Prevents default action
    event.preventDefault();

    // If no storage, create a new object to be used later
    // If there is storage, use current storage and add to it
    if (blogStorage == null) {
        let newBlogStore = {
            titleStore: [],
            authorStore: [],
            contentStore: [],
        } ;
        newBlogStore;
        console.log("It is null");
    } else {
        let blogStore = blogStorage;
        blogStore;
        console.log("It is not null");
    } ;

    if (usernameInput.value == "") {
        message.textContent = "Please enter username."
    } else if (titleInput.value == "") {
        message.textContent = "Please enter a title for your post."
    } else if (contentInput.value == "") {
        message.textContent = "Please enter content for your post."
    } else {
        // collect user input and store as variable
        blogStorage.titleStore.push(titleInput.value);
        blogStorage.authorStore.push(usernameInput.value);
        blogStorage.contentStore.push(contentInput.value);
    
        // Stores blog post data as strings in local storage
        localStorage.setItem('blogs', JSON.stringify(blogStore));
        // Takes user to the blog page
        // UNCOMMENT LINE BELOW BEFORE SUBMISSION!!!!!!
        // window.location.assign("blog.html")
    } ;
} ) ;