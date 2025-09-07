const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function checkGameStatus() {
    const dead = parseInt(deadCounter.textContent);
    const lost = parseInt(lostCounter.textContent);

    if (dead >= 10) {
        alert('Поздравляем с победой! Вы выиграли!');
        resetGame();
        return true;
    } else if (lost >= 5) {
        alert('Вы проиграли... Попробуйте снова!');
        resetGame();
        return true;
    }
    return false;
}

function resetGame() {
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}

function holeClickHandler(event) {
    const hole = event.target;

    if (!hole.classList.contains('hole')) {
        return;
    }

    if (hole.classList.contains('hole_has-mole')) {
        let dead = parseInt(deadCounter.textContent) + 1;
        deadCounter.textContent = dead;
        
        hole.classList.remove('hole_has-mole');
    } else {
        let lost = parseInt(lostCounter.textContent) + 1;
        lostCounter.textContent = lost;
    }
    
    checkGameStatus();
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', holeClickHandler);
}
