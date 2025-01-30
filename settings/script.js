const textEditior = document.getElementById('text');

const option1 = document.getElementById('option-1');
const option2 = document.getElementById('option-2');
const option3 = document.getElementById('option-3');
const option4 = document.getElementById('option-4');

option1.addEventListener('click', () => {
    textEditior.innerHTML = `
    <section class="submit-section">
        <div class="account">
            <form id="account-settings" action="./settings.php" method="POST">
            <label for="username">Change Username</label>
            <input name="username" id="username" type="text" required>
            <label for="firstName">Change First Name</label>
            <input name="firstName" id="firstName" type="text" required>
            <label for="username">Change Last Name</label>
            <input name="lastName" id="lastName" type="text" required>
            <label for="password">Change Password</label>
            <input name="password" id="password" type="password" required>
            <input id="submit-button" type="submit" name="submit" required>
            </form>
        </div>
    </section>`
})

option2.addEventListener('click', () => {
    textEditior.innerHTML = `
    <section class="accessbility-section">
        <div class="accessbility">
            <h1> Accessibility Settings </h1>
            <div class="access-choice">
                <label for="darkMode">Dark Mode</label>
                <input name="modes" id="darkMode" type="radio">
            </div>
            <div class="access-choice">
                <label for="lightMode">Light Mode</label>
                <input name="modes" id="lightMode" type="radio">
            </div>
        </div>
    </section>
    `;

    const darkModeRadio = document.getElementById('darkMode');
    const lightModeRadio = document.getElementById('lightMode');

    // Event listeners to toggle between modes
    darkModeRadio.addEventListener('change', () => {
        if (darkModeRadio.checked) {
            setDarkMode();
            localStorage.setItem('theme', 'dark');
        }
    });

    lightModeRadio.addEventListener('change', () => {
        if (lightModeRadio.checked) {
            setLightMode();
            localStorage.setItem('theme', 'light');
        }
    });

    function setDarkMode() {
        document.documentElement.style.setProperty('--background-colours', '#121212');
        document.documentElement.style.setProperty('--text-colour', '#e0e0e0');
        document.documentElement.style.setProperty('--hover-colour', '#bb86fc');
        document.documentElement.style.setProperty('--input-background', '#1e1e1e');
        document.documentElement.style.setProperty('--input-box', '#333');
        document.documentElement.style.setProperty('--input-text', '#fff');
        document.documentElement.style.setProperty('--choices-background', 'hsl(0, 0.00%, 16.90%)');
        document.documentElement.style.setProperty('--option-background', 'rgb(61, 61, 61)');
        document.documentElement.style.setProperty('--hover-options', '#1e1e1e');
    }

    function setLightMode() {
        document.documentElement.style.setProperty('--background-colours', '#f0f0f0');
        document.documentElement.style.setProperty('--text-colour', 'rgb(25, 80, 91)');
        document.documentElement.style.setProperty('--hover-colour', 'rgb(17, 57, 65)');
        document.documentElement.style.setProperty('--input-background', '#0a0a23');
        document.documentElement.style.setProperty('--input-box', '#fff');
        document.documentElement.style.setProperty('--input-text', '#000');
        document.documentElement.style.setProperty('--choices-background', 'hsl(0, 0%, 95%)');
        document.documentElement.style.setProperty('--option-background', 'lightgrey');
        document.documentElement.style.setProperty('--hover-options', '#e1e1e1');
    }
})


option3.addEventListener('click', () => {
    textEditior.innerHTML = `
    <section class="privacy-section">
        <div class="privacy">
            <h1>Privacy Policy</h1>
            <div class="privacy-content">
                <p>Privacy Policy for Health Advice Group  
                <em>Last Updated: 30/01/25</em></p>
                
                <p>Welcome to Health Advice Group (“we,” “us,” or “our”). Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, <a href="http://www.healthadvicegroup.com">www.healthadvicegroup.com</a>, and use our services.</p>

                <p>By using our website, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our website.</p>

                <h2>1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email address, health-related information (e.g., symptoms, medical history).</li>
                    <li><strong>Non-Personal Information:</strong> IP address, browser type, operating system, pages visited, time and date of visits.</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to enhance your experience. You can disable cookies in your browser settings.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide personalized health advice.</li>
                    <li>Improve our website and services.</li>
                    <li>Communicate with you and respond to inquiries.</li>
                    <li>Comply with legal obligations.</li>
                </ul>

                <h2>3. Sharing Your Information</h2>
                <p>We may share your information with third parties in the following circumstances:</p>
                <ul>
                    <li>With your consent.</li>
                    <li>With service providers assisting us in operating our website.</li>
                    <li>When required by law or to protect our legal rights.</li>
                </ul>

                <h2>4. Data Security</h2>
                <p>We take reasonable measures to protect your information, but no method of transmission over the internet is 100% secure.</p>

                <h2>5. Your Rights</h2>
                <p>Depending on your location, you may have the right to access, correct, or delete your information. To exercise these rights, contact us at <a href="mailto:privacy@healthadvicegroup.com">privacy@healthadvicegroup.com</a>.</p>

                <h2>6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>

                <h2>7. Children’s Privacy</h2>
                <p>Our website is not intended for children under 13. We do not knowingly collect personal information from children.</p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

                <h2>9. Contact Us</h2>
                <p>If you have any questions or concerns, please contact us at:</p>
                <address>
                    <strong>Health Advice Group</strong><br>
                    Email: <a href="mailto:privacy@healthadvicegroup.com">privacy@healthadvicegroup.com</a><br>
                    Address: [Insert Fake Address]
                </address>
            </div>
        </div>
    </section>`;
});

option4.addEventListener('click', () => {
    textEditior.innerHTML = `<section class="about-section">
    <div class="about">
        <h1>About Us</h1>
        <div class="about-content">
            <p>
                ### About Us  
                **Welcome to Health Advice Group – Your Trusted Partner in Health and Wellness**  

                At **Health Advice Group**, we believe that everyone deserves access to reliable, personalized, and actionable health advice. Founded in [Insert Year], our mission is to empower individuals to take control of their health by providing evidence-based information, practical tips, and innovative tools to support their wellness journey.  

                Whether you're looking for guidance on managing a chronic condition, improving your fitness, or simply making healthier lifestyle choices, we’re here to help. Our team of experts is dedicated to making health advice accessible, understandable, and tailored to your unique needs.  
            </p>

            <h2>Our Mission</h2>
            <p>
                At Health Advice Group, our mission is clear: to provide accessible, reliable, and personalized health advice to help individuals lead healthier, happier lives. We are committed to offering content that is based on the latest research and best practices in the healthcare industry.
            </p>

            <h2>Our Values</h2>
            <ul>
                <li>Integrity: We uphold the highest standards of trust and reliability in the health advice we provide.</li>
                <li>Empathy: We understand that health is a deeply personal journey, and we aim to support each individual with compassion and care.</li>
                <li>Innovation: We are constantly exploring new ways to improve health and wellness through technology and personalized solutions.</li>
            </ul>

            <address>
                Health Advice Group<br>
                123 Wellness Blvd, Suite 101<br>
                Healthy City, HC 12345<br>
                Email: <a href="mailto:support@healthadvicegroup.com">support@healthadvicegroup.com</a><br>
                Phone: (123) 456-7890
            </address>
        </div>
    </div>
</section>
`
});

function onStart() {
    // Check if dark mode or light mode was saved in localStorage
    const currentMode = localStorage.getItem('theme');

    if (currentMode === 'dark') {
        setDarkMode();
        darkModeRadio.checked = true;
    } else {
        setLightMode();
        lightModeRadio.checked = true;
    }

    function setDarkMode() {
        document.documentElement.style.setProperty('--background-colours', '#121212');
        document.documentElement.style.setProperty('--text-colour', '#e0e0e0');
        document.documentElement.style.setProperty('--hover-colour', '#bb86fc');
        document.documentElement.style.setProperty('--input-background', '#1e1e1e');
        document.documentElement.style.setProperty('--input-box', '#333');
        document.documentElement.style.setProperty('--input-text', '#fff');
        document.documentElement.style.setProperty('--choices-background', 'hsl(0, 0.00%, 16.90%)');
        document.documentElement.style.setProperty('--option-background', 'rgb(61, 61, 61)');
        document.documentElement.style.setProperty('--hover-options', '#1e1e1e');
    }

    function setLightMode() {
        document.documentElement.style.setProperty('--background-colours', '#f0f0f0');
        document.documentElement.style.setProperty('--text-colour', 'rgb(25, 80, 91)');
        document.documentElement.style.setProperty('--hover-colour', 'rgb(17, 57, 65)');
        document.documentElement.style.setProperty('--input-background', '#0a0a23');
        document.documentElement.style.setProperty('--input-box', '#fff');
        document.documentElement.style.setProperty('--input-text', '#000');
        document.documentElement.style.setProperty('--choices-background', 'hsl(0, 0%, 95%)');
        document.documentElement.style.setProperty('--option-background', 'lightgrey');
        document.documentElement.style.setProperty('--hover-options', '#e1e1e1');
    }
}

const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

const htmlSelector = document.querySelector('html');

// Toggle dropdown visibility on click
service.addEventListener("click", () => {
    dropdownSelected.style.display =
        dropdownSelected.style.display === "flex" ? "none" : "flex";
});

// If Loading screen hasn't been shown, redirect them to the loading page
if (!localStorage.getItem('hasVisitedLoading')) {
    // Hides home screen info
    htmlSelector.style.display = "none";
    localStorage.setItem('load', 'settings.php'); //Enters the HTML file for index into the global variable 'load'
    window.location.href = 'loading.html';
} else {
    //Shows home screen info
    htmlSelector.style.display = "inline";
    localStorage.removeItem('hasVisitedLoading');
    localStorage.removeItem('load'); //Removes Load in general when complete
}

onStart();