const blogList = document.querySelector('#blog-posts');

let titleStore = JSON.parse(localStorage.getItem('titles'));
let authorStore = JSON.parse(localStorage.getItem('authors'));
let contentStore = JSON.parse(localStorage.getItem('content'));

function renderPosts () {
  
    for (let i = 0; i < titleStore.length; i++) {
  
        const li = document.createElement('li');
        li.setAttribute('data-index', i);

        const postTitle = titleStore[i];
        const postAuthor = authorStore[i];
        const postContent = contentStore[i];

        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const para = document.createElement('p');

        h3.textContent = postTitle;
        h4.textContent = postAuthor;
        para.textContent = postContent;

        li.appendChild(h3);
        li.appendChild(h4);
        li.appendChild(para);
        blogList.appendChild(li);
    }
}

function init () {  
    if (titleStore === null) {
        const noContent = document.createElement('li');

        noContent.textContent = 'No content yet. Come back later!';
        noContent.style.textAlign = "center";
        noContent.style.padding = "50px";
        noContent.style.fontWeight = "bold";

        blogList.appendChild(noContent);
    } else {
    renderPosts();
    }
}

init ();