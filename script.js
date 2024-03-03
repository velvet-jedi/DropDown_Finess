const button = document.querySelector('button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('activated');
});

const menuButtons = document.querySelectorAll('.menu_button');

const menuButtonsArray = Array.from(menuButtons);

function closeOtherButtons(activeButton) {
    menuButtonsArray.forEach(butto => {
        if (butto !== activeButton) {
            if (butto.classList.contains('activated')) {
                butto.classList.remove('activated');
            }
        }
    });
}

menuButtonsArray.forEach(butt => {
    butt.addEventListener('click', () => {
        closeOtherButtons(butt);
        butt.classList.toggle('activated');
    });
});
