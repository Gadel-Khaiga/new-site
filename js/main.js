
// Слайдер

const slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      numbers = document.querySelectorAll('.num');
      btnLeft = document.querySelector('.left');
      btnRight = document.querySelector('.right')


let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeNumber = n => {
    for(num of numbers) {
        num.classList.remove('active');
    }
    numbers[n].classList.add('active');
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }
    else {
        index++;
        prepareCurrentSlide(index);
    }
}
const prevSlide = () => {
    if(index == 0){
        index = slides.length -1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    activeNumber(ind);
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index)
    })
})

// Бургер 

$(document).ready(function() {
    $('.burger').click(function(event){
        $('.burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


