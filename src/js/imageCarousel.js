const SLIDE_WIDTH = 600;

class ImageCarousel {

    images;
    currentSlidePosition;

    divSlideCollection;
    
    constructor(...images) {
        this.images = images;
        this.currentSlidePosition = 0;
        this.divSlideCollection = this.createSlideCollection();
    }

    createImageCarousel() {
        const divImageCarousel = document.createElement('div');
        divImageCarousel.classList.add('image-carousel');
        divImageCarousel.appendChild(this.createFrame());

        return divImageCarousel;
    }

    createFrame() {
        const divFrame = document.createElement('div');
        divFrame.classList.add('carousel-frame');
        divFrame.appendChild(this.divSlideCollection);
        divFrame.appendChild(this.createPreviousSlideButton());
        divFrame.appendChild(this.createNextSlideButton());

        return divFrame;
    }

    createSlideCollection() {
        const divSlideCollection = document.createElement('div');
        divSlideCollection.classList.add('carousel-slide-collection');
        this.images.forEach((image) => divSlideCollection.appendChild(this.createSlide(image)));
        divSlideCollection.style.left = `${this.currentSlidePosition}px`

        return divSlideCollection;
    }

    createSlide(image) {
        const imgSlide = document.createElement('div'); // TODO: Replace with image
        imgSlide.classList.add('carousel-slide');
        imgSlide.textContent = image;

        return imgSlide;
    }

    createPreviousSlideButton() {
        const btnPreviousSlide = document.createElement('button');
        btnPreviousSlide.type = 'button';
        btnPreviousSlide.classList.add('icon', 'back');
        btnPreviousSlide.textContent = 'Back'; // TODO: Remove this
        btnPreviousSlide.onclick = this.displayPreviousSlide.bind(this);

        return btnPreviousSlide;
    }

    createNextSlideButton() {
        const btnNextSlide = document.createElement('button');
        btnNextSlide.type = 'button';
        btnNextSlide.classList.add('icon', 'next');
        btnNextSlide.textContent = 'Next'; // TODO: Remove this
        btnNextSlide.onclick = this.displayNextSlide.bind(this);

        return btnNextSlide;
    }

    createNavigationDots() {
        // TODO: Add this
    }

    displayNextSlide() {
        if (this.currentSlidePosition > -((this.images.length - 1) * SLIDE_WIDTH)) {
            this.currentSlidePosition -= SLIDE_WIDTH;
            this.divSlideCollection.style.left = `${this.currentSlidePosition}px`;
        }
    }

    displayPreviousSlide() {
        if (this.currentSlidePosition < 0) {
            this.currentSlidePosition += SLIDE_WIDTH;
            this.divSlideCollection.style.left = `${this.currentSlidePosition}px`;
        }
    }
}

export default ImageCarousel;