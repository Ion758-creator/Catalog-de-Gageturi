const searchBar = document.getElementById("search-bar");
const productCards = document.querySelectorAll(".product-card");

searchBar.addEventListener("keyup", function () {
  const text = searchBar.value.toLowerCase();

  productCards.forEach(card => {
    const name = card.querySelector("h3").textContent.toLowerCase();

    if (name.includes(text)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("cautareGadget");
    const rezultat = document.getElementById("rezultatCautare");
    const gallery = document.getElementById("imageGallery");
    const stergeBtn = document.getElementById("stergeToate"); // ✅ mutat înăuntru

    // 🔹 1️⃣ Încarcă imaginile salvate la refresh
    let savedImages = JSON.parse(localStorage.getItem("gadgetImages")) || [];
    savedImages.forEach(link => addImage(link));

    // 🔎 2️⃣ Funcția de căutare la scriere
    input.addEventListener("input", function () {
        let text = input.value.toLowerCase();
        if (!text.startsWith("http")) {
            rezultat.innerText = text ? "Produsul care lai ales este cel mai bun!!!: " + text : "";
        } else {
            rezultat.innerText = "";
        }
    });

    // 🖼️ 3️⃣ Enter = adaugă imagine
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const link = input.value.trim();

            if (link && link.startsWith("http")) {
                addImage(link);

                savedImages.push(link);
                localStorage.setItem("gadgetImages", JSON.stringify(savedImages));

                input.value = "";
                rezultat.innerText = "";
            }
        }
    });

    // 🗑️ 4️⃣ Șterge toate imaginile
    stergeBtn.addEventListener("click", function () {
        if (confirm("Ești sigur că vrei să ștergi toate imaginile?")) {
            gallery.innerHTML = "";
            savedImages = [];
            localStorage.removeItem("gadgetImages");
        }
    });

    // 🔹 Funcție creare imagine
    function addImage(link) {
        const img = document.createElement("img");
        img.src = link;
        img.width = 200;
        img.style.margin = "10px";
        img.style.borderRadius = "8px";

        img.onerror = function () {
            alert("Linkul nu este valid pentru imagine!");
            img.remove();
        };

        gallery.appendChild(img);
    }

});