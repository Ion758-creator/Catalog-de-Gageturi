
const searchBar = document.getElementById("search-bar");
const productCards = document.querySelectorAll(".product-card");


searchBar.addEventListener("keyup", function () {
  const text = searchBar.value.toLowerCase();

  productCards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(text)) {
      card.style.display = "block"; // afișează cardul
    } else {
      card.style.display = "none";  // ascunde cardul
    }
  });
});

function cautaGadget() {
    let numeGadget = document.getElementById("cautareGadget").value;
    let rezultat = document.getElementById("rezultatCautare");

    if (numeGadget != "") {
        rezultat.innerText =
            "Gadgetul care l-ai ales este cel mai bun: " + numeGadget;
    } else {
        rezultat.innerText = "";
    }
}