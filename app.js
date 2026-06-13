const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')

setInterval(() => {
    const date = new Date();

    let hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const period = hr >= 12 ? "PM" : "AM";
    hr = hr % 12 || 12;

    hours.textContent = String(hr).padStart(2, '0');
    minutes.textContent = String(min).padStart(2, '0');
    seconds.textContent = String(sec).padStart(2, '0');
}, 1000);