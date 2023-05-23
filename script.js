document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const currentImageText = document.getElementById("currentImage");
    const totalImagesText = document.getElementById("totalImages");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
  
    const totalImages = slides.length;
    let currentImageIndex = 0;
  
    // Aggiorna il testo per visualizzare il numero corrente e il totale delle immagini
    currentImageText.textContent = currentImageIndex + 1;
    totalImagesText.textContent = totalImages;
  
    // Funzione per passare all'immagine precedente
    function showPreviousImage() {
      slides[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
      slides[currentImageIndex].classList.add("active");
      currentImageText.textContent = currentImageIndex + 1;
    }
  
    // Funzione per passare all'immagine successiva
    function showNextImage() {
      slides[currentImageIndex].classList.remove("active");
      currentImageIndex = (currentImageIndex + 1) % totalImages;
      slides[currentImageIndex].classList.add("active");
      currentImageText.textContent = currentImageIndex + 1;
    }
  
    // Aggiungi gli event listener ai pulsanti di navigazione
    prevButton.addEventListener("click", showPreviousImage);
    nextButton.addEventListener("click", showNextImage);
  });