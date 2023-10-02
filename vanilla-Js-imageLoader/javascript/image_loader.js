const imageContainer = document.getElementById('image-container');
const imgElement = document.getElementById('loaded-image');

const imageSrc = './assets/img.jpg';
imgElement.src = imageSrc;

imgElement.onload = () => {
    imageContainer.classList.add('ripple');
    setTimeout(() => { imgElement.style.opacity = '1'; }, 3000);

    imgElement.addEventListener('click', () => {
        imgElement.style.opacity = '0';
        setTimeout(() => { imageContainer.removeChild(imgElement); }, 500);
    });
};

imgElement.onerror = () => {
    console.error('Failed to load image');
};
