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

    createButtons() {
        // TODO: Add this
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