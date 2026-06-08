// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================

console.log("script loaded");



document.getElementById("search-btn").addEventListener("click", myFunction);

function myFunction() {
  const input = document.getElementById('search-input').value;
  console.log(input);

fetch(`https://openlibrary.org/search.json?q=${input}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(response => {

    for (let i = 0; i < response.docs.length; i++) {
    
        console.log(response.docs[i].title);
        console.log(response.docs[i].author_name[0]);
        console.log(response.docs[i].first_publish_year);

        const dl = document.getElementById("results");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dl.before(dt);
        dt.after(dd);
        dt.append(response.docs[i].title);
        dd.append(`${response.docs[i].author_name[0]} | ${response.docs[i].first_publish_year}`);

    }
    
  })
  .catch(error => console.error('Fetch error:', error));   
}


