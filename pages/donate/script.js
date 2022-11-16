//Burger-menu

let burgerMenu = document.querySelector('.menu-btn');
let menuNavigation = document.querySelector('.navigation');
let headerLogoDiv = document.querySelector('.div-logo')
let blackOut = document.querySelector('.blackout-burger')

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

// Paf

let dotSliderRadio = document.querySelectorAll('.slider-radio')
let labelDotSlider = document.querySelectorAll('.label-dot-slider')
let inputValue = document.querySelector('.under-dot-slider__input-Value')
let currentId = 0;
let currentValue = 0;

for (let i = 0; i < labelDotSlider.length; i++) {
    let currentRadio = dotSliderRadio[i]
    let currentLabel = labelDotSlider[i]

    if(currentRadio.checked === true) {
        currentId = currentRadio.id
    }

    if (String(i + 1) === currentId) {
        currentValue = currentLabel.innerHTML.slice(1)
    }

    currentLabel.addEventListener('click', function (event) {
        let currentLabelClick = event.target.htmlFor
        currentValue = event.target.innerHTML.slice(1)
        document.getElementById(currentLabelClick).checked = true;
        inputValue.value = currentValue;
    })
}

inputValue.value = currentValue;
const min = +inputValue.min;
const max = +inputValue.max;
document.addEventListener('keydown', function (event) {
    if(event.target.tagName === 'INPUT' && (event.key === '-' || event.key === '+' || event.key === 'e')) {
        event.preventDefault()
    }
})

inputValue.addEventListener('input', function () {
    document.addEventListener('keydown', function (event) {
        if(event.target.tagName === 'INPUT' && (event.key === '-' || event.key === '+' || event.key === 'e')) {
            event.preventDefault()
        }
    })

    const value = inputValue.value
    if(value > max) {
        inputValue.value = inputValue.value.slice(0, 4);
    } else if (value < min) {
        inputValue.value = min
    }
    for (let i = 0; i < labelDotSlider.length; i++) {
        let currentLabel = labelDotSlider[i]
        if(inputValue.value === currentLabel.innerHTML.slice(1)) {
            dotSliderRadio[i].checked = true;
        } else {
                dotSliderRadio[i].checked = false;
                dotSliderRadio[i].required = true;
        }
    }
})