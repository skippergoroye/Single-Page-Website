function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleString('en-us', { weekday: 'long' });

    document.getElementById('currentTimeUTC').innerText = utcTime;
    document.getElementById('currentDay').innerText = day;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);

// Initial call to display the time and day immediately on page load
updateTimeAndDay();
