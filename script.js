const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) =>{
    toggle.addEventListener("click", () => {
        const dropdown = toggle.nextElementSibling;

        dropdown.classList.toggle("active");
    });
} );