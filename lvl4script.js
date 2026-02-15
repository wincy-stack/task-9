
   
function submitName() {
    const nameInput = document.getElementById('nameInput');
    const message = document.getElementById('message');
    const name = nameInput.value.trim();

    if (name === '') {
        message.textContent = 'Error: Please enter your name!';
        message.className = 'message error';
        message.style.display = 'block';
    } else {
        message.textContent = `Success! Welcome, ${name}!`;
        message.className = 'message success';
        message.style.display = 'block';
    }
}

document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitName();
    }
});
