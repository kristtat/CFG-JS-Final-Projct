//set variables for DOM elements

const author = document.getElementById("author");
const bookTitle = document.getElementById("bookTitle");
const genre = document.getElementById("genre");
const rating = document.getElementById("rating");
const review = document.getElementById("review");
const lovedBooks = document.getElementById("lovedBooks");
const dislikedBooks = document.getElementById("dislikedBooks");

//function to enact submission

function submission(event) {

//if page refreshes the information entered won't be deleted

event.preventDefault();
  
//variables for all values entered
  
const authorValue = author.value;
const titleValue = bookTitle.value;
const genreValue = genre.value;
const ratingValue = parseInt(rating.value);
const reviewValue = review.value;

//create the book item from entered values
  
const bookItem = document.createElement("li");
	
// 	add a class to bookItem so that it can have CSS Y
bookItem.classList.add("book-entry");

//insert the text inside the list item using interpolation
 
bookItem.innerText = `Title: ${titleValue}\nAuthor: ${authorValue}\nGenre:${genreValue}\n Rating: ${ratingValue}\n Description: ${reviewValue}`;

 //insert the book item inside list for loved books or disliked books

  if (ratingValue <= 2) { dislikedBooks.appendChild(bookItem);
  } else if (ratingValue >= 3) { lovedBooks.appendChild(bookItem);
  }
	
	   // Create a string variable to hold the star emojis based on the rating
      let stars = '';
      for (let i = 0; i < ratingValue; i++) {
        stars += '⭐'; 
      }

bookItem.innerText = `Title: ${titleValue}\nAuthor: ${authorValue}\nGenre: ${genreValue}\nRating: ${stars}\nReview: ${reviewValue}`;
// 	makes it so that the First words of the book log are in bold. Y 
bookItem.innerHTML = bookItem.innerHTML.replace(/(Author:|Title:|Genre:|Rating:|Review:)/g, '<strong>$1</strong>');
	
	 //list items in a descending order inside list 
      if (ratingValue <= 2) {
    dislikedBooks.prepend(bookItem); 
      } else if (ratingValue >= 3) {
     lovedBooks.prepend(bookItem); 
      }
  
  //empty fields after submission except ratings as it has a range
  author.value = "";
	genre.value = ""
  bookTitle.value = "";
  review.value = "";
}

//set variable for whole form
const bookLogForm = document.getElementById("bookForm");

//the event listener to "listen" for the "submit" event on the form and execute the submission function when the user submits the form

bookLogForm.addEventListener("submit", submission);
