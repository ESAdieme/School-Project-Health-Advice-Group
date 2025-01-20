const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");
const htmlSelector = document.querySelector("html");

const reviewButton = document.getElementById("reviews");
const aboutButton = document.getElementById("aboutUs");
const textEditor = document.getElementById("texteditor");

// Keep track of the currently active button
let activeButton = null;

// Toggle dropdown visibility on click
service.addEventListener("click", () => {
    dropdownSelected.style.display =
        dropdownSelected.style.display === "flex" ? "none" : "flex";
});

/*
Scrapped Mobile Idea

service.addEventListener('click', function () {
    var navLinks = document.querySelector('.nav-links ul');
    var toggleButton = document.querySelector('.nav-toggle');

    navLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
*/


aboutButton.addEventListener("click", () => {
    // If the same button is clicked again, clear the content
    if (activeButton === aboutButton) {
        textEditor.innerHTML = "";
        activeButton = null; // Reset the active button
        return;
    }

    // Update the content for "About Us"
    textEditor.innerHTML = `<div class="about-section">
        <div class="about-content">
            <div class="about-text">
                <h1>About us</h1>
                <p>Welcome to Health Advice Group, where your well-being is our priority. We are a passionate team of health professionals, researchers, and wellness enthusiasts dedicated to empowering individuals with reliable, evidence-based health information.</p>
                <p>Founded with the mission to make health knowledge accessible to all, Health Advice Group bridges the gap between complex medical jargon and everyday understanding. Whether you're looking for expert tips on fitness, nutrition, mental health, or managing chronic conditions, we provide guidance that is practical, trustworthy, and tailored to your unique needs.</p>
                <p>At Health Advice Group, we believe in a proactive approach to health. Our team collaborates with leading healthcare providers, nutritionists, and wellness experts to bring you the latest insights and strategies to live a healthier, happier life.</p>
                <p>Join us on this journey to better health—one step, one choice, one day at a time. Because at Health Advice Group, your health is our success.</p>
            </div>
            <div class="about-image">
                <img src="home/images/stockpeople_about.png" alt="About Us">
            </div>
        </div>
    </div>`;

    // Scroll to the "About Us" section
    textEditor.scrollIntoView({ behavior: "smooth" });

    // Set the active button
    activeButton = aboutButton;
});


reviewButton.addEventListener("click", () => {
    // If the same button is clicked again, clear the content
    if (activeButton === reviewButton) {
        textEditor.innerHTML = "";
        activeButton = null; // Reset the active button
        return;
    }

    // Update the content for "Reviews"
    textEditor.innerHTML = `
        <div class="review-section">
            <h1>Reviews</h1>
            <p><span>⭐️⭐️⭐️⭐️⭐️</span><br>"I've been following Health Advice Group for months now, and their tips have truly transformed my lifestyle. The meal plans they shared helped me lose 10kg in a healthy way. Highly recommend to anyone looking for practical, reliable advice!" <i> - Emily H. </i></p>
            <p><span>⭐️⭐️⭐️⭐️</span><br>"The articles on this site are incredibly detailed and well-researched. I appreciate the straightforward approach to explaining complex health topics. Sometimes the site takes a while to load, but the content is worth the wait!"<i>– Raj P.</i></p>
            <p><span>⭐️⭐️⭐️⭐️⭐️</span><br>"Health Advice Group is my go-to source for wellness guidance. I especially love their mental health section—it’s so refreshing to see such compassionate and evidence-based advice in one place. Keep up the amazing work!" <i> – Sarah L. </i></p>
            <p><span>⭐️⭐️⭐️</span><br>"The information is decent, but I feel like the website layout is a bit cluttered. It was hard to find what I was looking for at first. That said, the content itself is trustworthy and informative."<i>– Mark D.</i></p>
            <p><span>⭐️⭐️⭐️⭐️⭐️</span><br>"Excellent resource! I was able to find natural remedies for some recurring health issues that actually worked. The website is easy to navigate, and I love the helpful infographics!"<i>– Olivia C.</i></p>
        </div>
    `;

    // Scroll to the "Reviews" section
    textEditor.scrollIntoView({ behavior: "smooth" });

    // Set the active button
    activeButton = reviewButton;
});

// If Loading screen hasn't been shown, redirect them to the loading page
if (!localStorage.getItem('hasVisitedLoading')) {
    // Hides home screen info
    localStorage.setItem('load', 'index.html'); //Enters the HTML file for index into the global variable 'load'
    htmlSelector.style.display = "none";
    window.location.href = 'loading.html';
} else {
    //Shows home screen info
    htmlSelector.style.display = "inline";
    localStorage.removeItem('hasVisitedLoading');
    localStorage.removeItem('load'); //Removes Load in general when complete
}