// Selects the blog post element on the blog page
const blogList = document.querySelector('#blog-posts');

// Retreives blog post content in local storage
let blogStore = JSON.parse(localStorage.getItem('blogs'));

// Function for rendering blog posts on blog page
function renderPosts () {
    // For every blog post stored, this loop will repeat itself
    for (let i = 1; i < blogStore.postAuthors.length; i++) {
        
        // Creates a list item element and gives a dataset for the iteration completed
        const li = document.createElement('li');
        li.setAttribute('data-index', i);

        // Retreive blog content from the storage and set as a variable
        const postTitle = blogStore.postTitles[i];
        const postAuthor = blogStore.postAuthors[i];
        const postContent = blogStore.postContent[i];

        // creates elements to be placewd in the list item
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const para = document.createElement('p');

        // sets the text content equal to the variables above
        h3.textContent = postTitle;
        h4.textContent = `By ${postAuthor}`;
        para.textContent = postContent;

        // Adds the elements created to the page
        li.appendChild(h3);
        li.appendChild(h4);
        li.appendChild(para);
        blogList.appendChild(li);
    }
}

// Function to be run when the blog page is opened
function init () {  
    // If no content, display a message and a sad face emoji
    if (blogStore.postAuthors.length === 1) {
        // creates a list item and a <p> element
        const noContent = document.createElement('li');
        const sadFace = document.createElement('p')

        // Adds a message to the page showing that there isn't any content
        noContent.textContent = 'No content yet. Come back later!';
        noContent.style.textAlign = "center";
        noContent.style.padding = "50px";
        noContent.style.fontWeight = "bold";
        noContent.style.fontSize = "40px";

        // Adds the sad face emoji
        sadFace.textContent = "😔";
        sadFace.style.fontSize = "100px";
        sadFace.style.paddingTop = "50px";

        // Adds the crearted elements to the page
        blogList.appendChild(noContent);
        noContent.appendChild(sadFace);
    } else {
    // If there is content, diplay the posts
    renderPosts();
    }
}

init ();