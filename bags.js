document.querySelector('.burger-menu').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Function to open the modal
function openModal(element) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = element.src;
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}

// Add event listeners to all images within the product cards
document.querySelectorAll('.product-card img').forEach(function(img) {
    img.addEventListener('click', function() {
        openModal(this);
    });
});

// Close modal when 'X' is clicked
document.querySelector('.close').addEventListener('click', closeModal);

// Close modal when clicking outside the image
document.getElementById('image-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});





    

