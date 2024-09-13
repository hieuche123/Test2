const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const sliderInner = document.querySelector('.slider-inner');
const images = document.querySelectorAll('.slider-inner img');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;

let currentIndex = 0;

function updateSlider() {
    const imageWidth = images[currentIndex].getBoundingClientRect().width;
    const offset = -currentIndex * imageWidth;
    sliderInner.style.transform = `translateX(${offset}px)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateSlider();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Initialize slider
window.addEventListener('resize', updateSlider); // Update slider on resize
updateSlider();
