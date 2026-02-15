let coins = 0;

function increaseCoins() {
    coins++;
    updateDisplay();
}

function decreaseCoins() {
    if (coins > 0) {
        coins--;
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('coinCount').textContent = coins;
}