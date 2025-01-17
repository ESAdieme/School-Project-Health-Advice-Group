const service = document.getElementById("select-service");
const dropdownSelected = document.getElementById("selected");

function dropDown() {
    dropdownSelected.style.display = "flex";
}

function dropUp() {
    dropdownSelected.style.display = "none";
}

service.addEventListener("mouseover", dropDown);
service.addEventListener("mouseout", dropUp);