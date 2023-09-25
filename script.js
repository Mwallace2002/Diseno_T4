const imageItems = document.querySelectorAll('.image-item');
const imageDescriptionOverlay = document.querySelector('.image-description-overlay');
const imageDescriptionText = document.getElementById('image-description-text');
const closeButton = document.getElementById('close-button');

imageItems.forEach((item) => {
    const img = item.querySelector('img');
    
    img.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click event from propagating to the parent item
        const description = img.getAttribute('data-description');
        imageDescriptionText.textContent = description;
        imageDescriptionOverlay.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    imageDescriptionOverlay.style.display = 'none';
});
