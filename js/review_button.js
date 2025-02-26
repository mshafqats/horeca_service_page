const reviewBtn = document.getElementById("reviewBtn");
const reviewFormContainer = document.getElementById("reviewFormContainer");
const reviewList = document.getElementById("reviewList");

reviewBtn.onclick = function() {
    if (reviewFormContainer.style.display === "none" || reviewFormContainer.style.display === "") {
        reviewFormContainer.style.display = "block";
    } else {
        reviewFormContainer.style.display = "none";
    }
};

const stars = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach(star => {
    star.onclick = function() {
        selectedRating = this.getAttribute("data-value");
        updateStars(selectedRating);
    };
});

function updateStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute("data-value") <= rating) {
            star.classList.add("selected");
        } else {
            star.classList.remove("selected");
        }
    });
}

const reviewForm = document.getElementById("reviewForm");

reviewForm.onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
    const designation = document.getElementById("designation").value;
    const company = document.getElementById("company").value;
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
        <h4>${name} (${designation})</h4>
        <p><strong>Rating:</strong> ${"&#9733;".repeat(selectedRating)}${"&#9734;".repeat(5 - selectedRating)}</p>
        <p><strong>Review:</strong> ${review}</p>
        <p><strong>Company:</strong> ${company}</p>
    `;

    reviewList.insertBefore(reviewItem, reviewList.firstChild);
    reviewForm.reset();
    updateStars(0);
    reviewFormContainer.style.display = "none";
};
