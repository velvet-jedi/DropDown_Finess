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

// -----------------------------------------------------------
const optionMenu = document.querySelector('.select-menu');
const selectBtn = optionMenu.querySelector('.select-btn');
const options = optionMenu.querySelectorAll('.option');
const sBtnText = optionMenu.querySelector('.sBtn-text');

selectBtn.addEventListener('click', () => {
    optionMenu.classList.toggle('active');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        const selectedOption = option.querySelector('.option-text').innerText;
        sBtnText.textContent = selectedOption;

        optionMenu.classList.remove('active');
    });
});
