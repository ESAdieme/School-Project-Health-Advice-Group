const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

// Keep track of the currently active button
let activeButton = null;

// Toggle dropdown visibility on click
service.addEventListener("click", () => {
    dropdownSelected.style.display =
        dropdownSelected.style.display === "flex" ? "none" : "flex";
});
