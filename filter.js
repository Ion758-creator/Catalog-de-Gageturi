function filterProducts(category) {
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } else if (card.getAttribute("data-category") === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

document.getElementById("filter-all").onclick = () => filterProducts("all");
document.getElementById("filter-phones").onclick = () => filterProducts("telefon");
document.getElementById("filter-watches").onclick = () => filterProducts("ceas");
document.getElementById("filter-laptops").onclick = () => filterProducts("laptop");
document.getElementById("filter-headphones").onclick = () => filterProducts("casti");
