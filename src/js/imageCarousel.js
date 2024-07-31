class ImageCarousel {
    images;
    
    constructor(...images) {
        this.images = images;
    }

    createImageCarousel() {
        return this.createFrame();
    }

    createFrame() {
        const divFrame = document.createElement('div');
        divFrame.classList.add('carousel-frame');
        divFrame.appendChild(this.createSlideCollection());

        return divFrame;
    }

    createSlideCollection() {
        const divSlideCollection = document.createElement('div');
        divSlideCollection.classList.add('carousel-slide-collection');
        this.images.forEach((image) => divSlideCollection.appendChild(this.createSlide(image)));

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
}

export default ImageCarousel;