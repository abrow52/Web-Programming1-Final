function goToSearch(element) {
    element.preventDefault();
    const query = element.target.querySelector("input").value.trim();
    if (query === "") return;

    
    window.location.href = "sale.html?search=" + encodeURIComponent(query);
}

function searchProducts() {
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    const tbody = document.querySelector(".table-grid table tbody");
    const rows = tbody.querySelectorAll("tr");
    let foundCount = 0;

    tbody.classList.remove("single-result", "double-result");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(searchValue)) {
            row.style.display = "";
            foundCount++;
        } else {
            row.style.display = "none";
        }
    });

    if (foundCount === 0) {
        document.getElementById("noResults").style.display = "block";
    } else if (foundCount === 1) {
        tbody.classList.add("single-result");
    } else if (foundCount === 2){
        tbody.classList.add("double-result");
    } else {
        document.getElementById("noResults").style.display = "none";
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("search");
    if (query) {
        document.getElementById("searchInput").value = query;
        searchProducts();
    }
});