/*
 * WEB222 Final Assessment
 *
 * Honesty Statement: 
 * I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. 
 * No part of this assessment has been copied manually or electronically 
 * from any other source (including web sites) except for the information 
 * supplied by the WEB222 instructors and / or made available in this assessment for my use. 
 * I also declare that no part of this assignment has been distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Boyun Kim
 *      Student ID: 116526229
 *      Date:       2023-08-06
 */

// Generating review cards
function reviewCards() {
  const reviewCont = document.getElementById("reviewContainer")
  reviewCont.innerHTML = ""; // Clear existing cards

  reviewData.forEach(review => {
    const card = document.createElement("div");
    card.classList.add("reviewCards");

    const rating = document.createElement("p");
    rating.classList.add("card-rating");
    rating.textContent = starRating(review.rating);
    
    const reviewText = document.createElement("p");
    reviewText.textContent = review.text;
    reviewText.classList.add("card-text");

    const date = document.createElement("p");
    date.textContent = `${review.date}`;
    date.classList.add("card-date");

    const name = document.createElement("p");
    name.textContent = `(${review.name})`;
    name.classList.add("card-name");

    card.appendChild(rating);
    card.appendChild(reviewText);
    card.appendChild(date);
    card.appendChild(name);

    reviewCont.appendChild(card);
  });
}

// Adding a new review to the reviewData array
function addReview() {
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const rating = parseInt(document.getElementById("rating").value);
  const reviewText = document.getElementById("reviewText").value;

  reviewData.push({
    name: name,
    date: date,
    rating: rating,
    text: reviewText
  });

  reviewCards();
}

// Generating star based on the given number
function starRating(rating) {
  const totalStar = 5;
  const fullStar = "★".repeat(rating);
  const emptyStar = "☆".repeat(totalStar - rating);
  return fullStar + emptyStar;
}

// Generating review cards when the page loads
window.onload = reviewCards();