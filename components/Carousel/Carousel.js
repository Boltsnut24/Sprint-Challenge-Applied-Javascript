class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');

        this.images = this.carousel.querySelectorAll('img');

        this.leftBtn.addEventListener('click', () => this.scrollLeft());
        this.rightBtn.addEventListener('click', () => this.scrollRight());

        this.index = 0;
    }

    scrollLeft(){
        let imgArr = Array.from(this.images);
        console.log(imgArr);
        document.slide.src = imgArr[0];

        if( this.index > 0 ){
            console.log(imgArr[this.index]);
            this.index--;
        } else {
            this.index = imgArr.length - 1;
        }
        
        imgArr.forEach(photo => photo.style.display = 'none');

        imgArr[this.index].style.display = 'block';
    }

    scrollRight(){
        let imgArr = Array.from(this.images);
        console.log(imgArr);
        document.slide.src = imgArr[0];

        if( this.index < imgArr.length - 1){
            console.log(imgArr[this.index]);
            this.index++;
        } else {
            this.index = 0;
        }
        imgArr.forEach(photo => photo.style.display = 'none');

        imgArr[this.index].style.display = 'block';
    }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
