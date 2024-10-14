function updateTime() {
    const now = new Date();
    
    // Get hours, minutes, and seconds
    let hours24 = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format for 24-hour clock
    let time24 = 
        String(hours24).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0');

    let hours12 = hours24 % 12 || 12; // Convert 24-hour to 12-hour format
    let ampm = hours24 >= 12 ? 'PM' : 'AM';

    let time12 = 
        String(hours12).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' + 
        String(seconds).padStart(2, '0') + ' ' + ampm;

    document.getElementById('clock24').textContent = '24-hour format: ' + time24;
    document.getElementById('clock12').textContent = '12-hour format: ' + time12;
}

setInterval(updateTime, 1000);

updateTime();
