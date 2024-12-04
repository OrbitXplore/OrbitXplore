let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

let touchStartX = 0;
let touchEndX = 0;

nextButton.onclick = function() {
    showSlider('next');
};

prevButton.onclick = function() {
    showSlider('prev');
};

let unAcceppClick;

const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

// Scroll event to navigate through the items
carousel.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        showSlider('next'); // Scroll down navigates to the next item
    } else {
        showSlider('prev'); // Scroll up navigates to the previous item
    }
});

// Touch event handlers for swipe
carousel.addEventListener('touchstart', (event) => {
    if (window.innerWidth <= 768 && !carousel.classList.contains('showDetail')) { // Only allow swipe on mobile and not in showDetail state
        touchStartX = event.changedTouches[0].screenX;
    }
});

carousel.addEventListener('touchend', (event) => {
    if (window.innerWidth <= 768 && !carousel.classList.contains('showDetail')) { // Only allow swipe on mobile and not in showDetail state
        touchEndX = event.changedTouches[0].screenX;
        handleSwipe();
    }
});

const handleSwipe = () => {
    if (touchEndX < touchStartX) {
        showSlider('next'); // Swipe left for next item
    } else if (touchEndX > touchStartX) {
        showSlider('prev'); // Swipe right for previous item
    }
};

seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});

backButton.onclick = function() {
    carousel.classList.remove('showDetail');
}

// script.js
document.getElementById('toggleButton').addEventListener('click', function() {
    var description = document.getElementById('des');
    var specification = document.getElementById('specification');
    
    if (des.style.display === "none") {
        des.style.display = "block";
        specification.style.display = "none";
        this.textContent = "Show Specifications";
    } else {
        des.style.display = "none";
        specification.style.display = "block";
        this.textContent = "Show Description";
    }
});




 





