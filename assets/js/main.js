var sliderContainer = document.getElementById('fa-moon-o');
var slider = document.createElement('div');
var sliderTrack = document.createElement('div');
var sliderLabel = document.createElement('label');
var LEFT_POSITION = '20%';
var RIGHT_POSITION = '20%';
var LEFT_COLOR = 'salmon';
var RIGHT_COLOR = 'steelblue';
var LIGHT_THEME = {
    BACKGROUND: 'white',
    TEXT: 'black'
};
var DARK_THEME = {
    BACKGROUND: '#2f2f2f',
    TEXT: 'white'
};

function initializeSlider() {
    slider.id = 'slider';
    slider.style.background = LEFT_COLOR;
    slider.style.left = LEFT_POSITION;
    slider.isLeft = true;
    slider.onclick = slide;
}

function slide() {
    console.log('slide!');
    slider.style.left = slider.isLeft ? RIGHT_POSITION : LEFT_POSITION;
    slider.style.background = slider.isLeft ? RIGHT_COLOR : LEFT_COLOR;

    toggleTheme(slider.isLeft);
    slider.isLeft = !slider.isLeft;
}

function toggleTheme(toggle) {
    document.body.style.background = (toggle === true) ? DARK_THEME.BACKGROUND : LIGHT_THEME.BACKGROUND;
    document.body.style.color = (toggle === true) ? DARK_THEME.TEXT : LIGHT_THEME.TEXT;
}

(function main() {
    initializeSlider();
    sliderTrack.id = 'slider-track';
})();

$("#fa-moon-o").on("click", function () {

    toggleTheme();
    initializeSlider();
    slide();
    (function main() {
        initializeSlider();
        sliderTrack.id = 'slider-track';
    })();

})
$("#fa-sun-o").on("click", function () {

    toggleTheme(toggle);
    initializeSlider();
    slide();
    (function main() {
        initializeSlider();
        sliderTrack.id = 'slider-track';
    })();

})