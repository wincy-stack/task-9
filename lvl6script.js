const correctDoor = 2; // Door 2 is the correct answer

function checkDoor(doorNumber) {
    const message = document.getElementById('message');
    
    if (doorNumber === correctDoor) {
        message.textContent = '🎉 Success! You found the correct door! Congratulations!';
        message.className = 'message success';
        message.style.display = 'block';
    } else {
        message.textContent = '❌ Wrong door! Try again or restart the game.';
        message.className = 'message error';
        message.style.display = 'block';
    }
}