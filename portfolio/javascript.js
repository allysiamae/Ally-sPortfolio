let clickCount = 0;

document.getElementById('clickButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCount').innerText = clickCount;
});

function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock').innerText = now.toLocaleTimeString([], options);
}

setInterval(updateClock, 1000);

document.getElementById('themeToggle').addEventListener('click', function() {
    const body = document.getElementById('body');
    body.classList.toggle('bg-dark');
    body.classList.toggle('bg-light');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
    this.reset();
});