const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

const textEditor = document.getElementById("texteditor");
const reviewButton = document.getElementById("reviews");

// Toggle dropdown visibility on click
service.addEventListener("click", () => {
    dropdownSelected.style.display =
        dropdownSelected.style.display === "flex" ? "none" : "flex";
});

reviewButton.addEventListener("click", setReview);

function setReview() {
    textEditor.innerHTML = `
    <div class="review-section">
    <h1>Reviews</h1>
    <br>
    <p>"I've been following Health Advice Group for months now, and their tips have truly transformed my lifestyle. The meal plans they shared helped me lose 10kg in a healthy way. Highly recommend to anyone looking for practical, reliable advice!" <i> - Emily H. </i> <p>
    <br>
    <p>"The articles on this site are incredibly detailed and well-researched. I appreciate the straightforward approach to explaining complex health topics. Sometimes the site takes a while to load, but the content is worth the wait!"<i>– Raj P.</i></p>
    <br>
    <p>"Health Advice Group is my go-to source for wellness guidance. I especially love their mental health section—it’s so refreshing to see such compassionate and evidence-based advice in one place. Keep up the amazing work!" <i> – Sarah L. </i></p>
    </div>`
}