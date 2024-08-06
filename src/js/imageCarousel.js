const SLIDE_WIDTH = 600;

class ImageCarousel {

    images;
    currentSlideIndex;
    navigationDotsArray;

    divSlideCollection;
    divNavigationDots;
    
    constructor(...images) {
        this.images = images;
        this.currentSlideIndex = 0;
        this.navigationDotsArray = new Array();
        this.divSlideCollection = this.createSlideCollection();
        this.divNavigationDots = this.createNavigationDots();
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
        divFrame.appendChild(this.createButtonControls());

        return divFrame;
    }

    createSlideCollection() {
        const divSlideCollection = document.createElement('div');
        divSlideCollection.classList.add('carousel-slide-collection');
        this.images.forEach((image) => divSlideCollection.appendChild(this.createSlide(image)));
        divSlideCollection.style.left = `${this.currentSlideIndex * -SLIDE_WIDTH}px`

        return divSlideCollection;
    }

    createSlide(image) {
        const imgSlide = document.createElement('div'); // TODO: Replace with image
        imgSlide.classList.add('carousel-slide');
        imgSlide.textContent = image;

        return imgSlide;
    }

    createButtonControls() {
        const divButtonControls = document.createElement('div');
        divButtonControls.classList.add('carousel-button-controls');
        divButtonControls.appendChild(this.createPreviousSlideButton());
        divButtonControls.appendChild(this.divNavigationDots);
        divButtonControls.appendChild(this.createNextSlideButton());

        return divButtonControls;
    }

    createPreviousSlideButton() {
        const btnPreviousSlide = document.createElement('button');
        btnPreviousSlide.type = 'button';
        btnPreviousSlide.classList.add('icon', 'back');
        btnPreviousSlide.onclick = this.displayPreviousSlide.bind(this);

        return btnPreviousSlide;
    }

    createNextSlideButton() {
        const btnNextSlide = document.createElement('button');
        btnNextSlide.type = 'button';
        btnNextSlide.classList.add('icon', 'next');
        btnNextSlide.onclick = this.displayNextSlide.bind(this);

        return btnNextSlide;
    }

    createNavigationDots() {
        const divNavDotCollection = document.createElement('div');
        divNavDotCollection.classList.add('carousel-nav-dot-collection');
        for (let i = 0; i < this.images.length; i++) {
            let divNavigationDot = this.createNavigationDot(i);
            divNavDotCollection.appendChild(divNavigationDot);
            this.navigationDotsArray.push(divNavigationDot);
        }
        this.setSelectedNavigationDot(this.currentSlideIndex);
        
        return divNavDotCollection;
    }

    createNavigationDot(jumpPosition) {
        const divNavDot = document.createElement('div');
        divNavDot.classList.add('carousel-nav-dot');
        divNavDot.onclick = () => this.jumpToSlide(jumpPosition);

        return divNavDot;
    }

    displayNextSlide() {
        if (this.currentSlideIndex < this.images.length - 1) {
            this.currentSlideIndex++;
        } else {
            this.currentSlideIndex = 0;
        }
        this.divSlideCollection.style.left = `${this.currentSlideIndex * -SLIDE_WIDTH}px`;
        this.setSelectedNavigationDot(this.currentSlideIndex);
    }

    displayPreviousSlide() {
        if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
        } else {
            this.currentSlideIndex = this.images.length - 1;
        }
        this.divSlideCollection.style.left = `${this.currentSlideIndex * -SLIDE_WIDTH}px`;
        this.setSelectedNavigationDot(this.currentSlideIndex);
    }

    jumpToSlide(position) {
        console.log(position);
        this.currentSlideIndex = position;
        this.divSlideCollection.style.left = `${this.currentSlideIndex * -SLIDE_WIDTH}px`;
        this.setSelectedNavigationDot(this.currentSlideIndex);
    }

    setSelectedNavigationDot(indexToSelect) {
        this.navigationDotsArray.forEach(navigationDot => {
            navigationDot.classList.remove("selected");
        });
        this.navigationDotsArray[indexToSelect].classList.add("selected");
    }
}

export default ImageCarousel;