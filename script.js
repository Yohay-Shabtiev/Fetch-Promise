const authorContainer = document.getElementById("author-container"); //get the html element using the document object
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// fetching data from server, returns a Promise object which using a Response object
//   representing the server'a response
// res.json() returns a Promise object which resolves to a JS element might be object or primitive
//
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json()) // using the resolved value of fetch
  // using the resolved value of res.json()
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex)); //pasing subarray [startIndex:endIndex]
  })
  // using the rejected value
  .catch((err) => {
    console.error(`There was an error: ${err}`);
  });

const displayAuthors = (authors) => {
  authors.forEach(({ author, image, url, bio }, index) => {
    // Template literals can create HTML element in a more concise way
    authorContainer.innerHTML += `
    <div id="${index}" class="user-card">
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar" />
      <p class="bio">${bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
    </div>
  `;
  });
};
