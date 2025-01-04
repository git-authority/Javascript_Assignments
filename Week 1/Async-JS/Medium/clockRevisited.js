setInterval(() => {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    if (hours > 11) {
        hours %= 12
        hours = hours.toString().padStart(2, '0');
        console.log(`${hours}:${minutes}:${seconds} PM`);
    }
    else {
        console.log(`${hours}:${minutes}:${seconds} AM`);
    }
}, 1000);