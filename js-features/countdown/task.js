const timerElement = document.getElementById('timer');
let seconds = parseInt(timerElement.textContent);

const timer = setInterval(() => {
    seconds--;
    timerElement.textContent = seconds;

    if(seconds <= 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе');
        location = 'https://storum.ru/image/categories/1063.png';
        alert(location);
    };
}, 1000);