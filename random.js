async function loadAndDisplayImages() {
    try {
        
        const response = await fetch('images.json');
        if (!response.ok) {
            throw new Error('Failed to load images data');
        }
        
        const imagesJSON = await response.json();
        displayRandomImages(imagesJSON);
        
    } catch (error) {
        console.error('Error loading images:', error);
        const fallbackImages = [
             { url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" }, // smartphone
  { url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" }, // laptop
  { url: "https://images.unsplash.com/photo-1518443895914-6b3c0cfdac5b" }, // smartwatch
  { url: "https://images.unsplash.com/photo-1512499617640-c2f999018b72" }, // headphones
  { url: "https://images.unsplash.com/photo-1498049794561-7780e7231661" }, // tech setup
  { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" }  // gadgets workspace
];
        displayRandomImages(fallbackImages);
    }
}
    
function displayRandomImages(imagesArray) {
    const shuffled = [...imagesArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    const selected = shuffled.slice(0, 3);
    const gallery = document.getElementById("gallery");

    gallery.innerHTML = '';
    
    selected.forEach(item => {
        const img = document.createElement("img");
        img.src = item.url;
        img.alt = "Random picture";
        img.loading = "lazy";
        gallery.appendChild(img);
    });
}

async function loadFromJSFile() {
    try {
        const imageModule = await import('./imageData.js');
        const images = imageModule.default || imageModule.images;
        displayRandomImages(images);
    } catch (error) {
        console.error('Error loading from JS file:', error);
        loadAndDisplayImages();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadAndDisplayImages();
});