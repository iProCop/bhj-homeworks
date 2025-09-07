const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

let clickCount = 0;

cookieElement.addEventListener('click', function() {
    clickCount++;
    counterElement.textContent = clickCount;

    if(clickCount % 2 === 1) {
        cookieElement.width = 180;
    } else {
        cookieElement.width = 200;
    }
});