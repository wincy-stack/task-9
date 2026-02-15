let currentLevel = 1;
const maxLevel = 6;

function levelUp() {
    if (currentLevel < maxLevel) {
        currentLevel++;
        updateDisplay();
    }

    // Disable button if max level reached
    if (currentLevel >= maxLevel) {
        document.getElementById('levelUpBtn').disabled = true;
        document.getElementById('levelText').textContent = 'Max level reached!';
    }
}

function updateDisplay() {
    document.getElementById('levelBadge').textContent = currentLevel;
    document.getElementById('levelText').textContent = `You are at level ${currentLevel}`;
}