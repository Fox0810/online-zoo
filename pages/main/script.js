//Burger-menu

let burgerMenu = document.querySelector('.menu-btn');
let menuNavigation = document.querySelector('.navigation');
let headerLogoDiv = document.querySelector('.div-logo');
let blackOut = document.querySelector('.blackout-burger');

burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    headerLogoDiv.classList.toggle('active');
    menuNavigation.classList.toggle('active');
    blackOut.classList.toggle('active')
})

blackOut.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    headerLogoDiv.classList.toggle('active');
    menuNavigation.classList.toggle('active');
    blackOut.classList.toggle('active')
})

//Carousel

let containerPhoto = document.querySelector('.container-photo')
let photoCardsDiv = document.querySelector('.photo-cards');
let copyPhotoCardDiv = photoCardsDiv.cloneNode(true)
let photoCardsCopy = copyPhotoCardDiv.querySelectorAll('.photo-card');

let flag = true;

document.querySelector('.button-left').addEventListener('click', function () {
    if(flag){
        flag = false;
        let copy = copyPhotoCardDiv.cloneNode(true);
        for (let i = copy.children.length; i >= 0; i--) {
            copy.appendChild(copy.children[Math.random() * i | 0]);
        }
        containerPhoto.prepend(copy);
        containerPhoto.style.animation = 'slideLeft ease .5s';
        setTimeout(() => {
            containerPhoto.style.animation = ''
            containerPhoto.removeChild(containerPhoto.lastElementChild);
            flag = true;
        }, 500);
 
    }
});

document.querySelector('.button-right').addEventListener('click', function () {
    if(flag){
        flag = false;
        let copy = copyPhotoCardDiv.cloneNode(true);
        for (let i = copy.children.length; i >= 0; i--) {
            copy.appendChild(copy.children[Math.random() * i | 0]);
        }
        containerPhoto.append(copy);
        containerPhoto.style.animation = 'slideRight ease .5s';
      
        setTimeout(() => {
            
            containerPhoto.style.animation = ''
            containerPhoto.removeChild(containerPhoto.firstElementChild);
        
            flag = true;
        }, 500);

 
    }
});

// pop-up testimonial

if(window.innerWidth > 1000) {
    let testimonials= document.querySelectorAll('.testimonial')
    let popUp = document.querySelector('.pop-up')
    let popUpContent = document.querySelector('.pop-up__content')

    for (let i = 0; i < testimonials.length; i++) {
        let testimonial = testimonials[i]
        testimonial.addEventListener('click', function () {
            popUpContent.prepend(testimonial.cloneNode(true))
            popUp.classList.toggle('hidden-pop-up')
        })
    }

    popUp.addEventListener('click', function (event) {
        if (event.target.classList.contains('pop-up')) {
            popUp.classList.toggle('hidden-pop-up')
            popUpContent.removeChild(popUpContent.firstElementChild)
        }
    })
    document.querySelector('.pop-up__closeButton').addEventListener('click', function () {
        popUp.classList.toggle('hidden-pop-up')
        popUpContent.removeChild(popUpContent.firstElementChild)
    })
}

// range-line
let testimonialsDiv = document.querySelector('.testimonials-div')
let testimonials= document.querySelector('.testimonial')
let rangeInput = document.querySelector('.range-line-div__input')

let width = testimonials.offsetWidth
let gap = +(window.getComputedStyle(testimonialsDiv).getPropertyValue('gap').replace(/[^0-9]/g,""))
console.log('gap', gap)
console.log('offsetWidth', width)


rangeInput.addEventListener('input', function () {
    if(rangeInput.value === '0') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = 0;
    }
    if(rangeInput.value === '1') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = Number(rangeInput.value) * (width + gap);
    }
    if(rangeInput.value === '2') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = Number(rangeInput.value) * (width + gap);
    }
    if(rangeInput.value === '3') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = Number(rangeInput.value) * (width + gap);
    }
    if(rangeInput.value === '4') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = Number(rangeInput.value) * (width + gap);
    }
    if(rangeInput.value === '5') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = Number(rangeInput.value) * (width + gap);
    }
    if(rangeInput.value === '6') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = Number(rangeInput.value) * (width + gap);
    }
    if(rangeInput.value === '7') {
        console.log(rangeInput.value)
        testimonialsDiv.scrollLeft = testimonialsDiv.scrollWidth;
    }
})
console.log(testimonialsDiv.scrollWidth)