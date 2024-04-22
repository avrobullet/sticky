
// Initialize variables
var day_colours = [
    '#87CEEB', // Sky Blue 
    '#90EE90', // Light Green 
    '#F5F5DC', // Beige
    '#D3D3D3', // Light Gray 
    '#FFFF99'];// Pastel Yellow
var night_colours = [
    '#36454F', // Charcoal
    '#013220', // Dark Green
    '#808080', // Dark Gray 
    '#800080', // Dark Purple 
    '#191970'];// Midnight Blue
var time_change = 5000;

// Just a class to alternate between background colors (will expand to be more )
export default class BackgroundController {
    private hour: number;

    constructor() {
        this.changeBackgroundDayNight();
        this.alternateBackgroundColor();
    }

    // Check if it's night time (e.g., between 7pm and 6am)
    changeBackgroundDayNight() {
        // Get current time
        this.hour = new Date().getHours();

        //Change background color
        if (7 < this.hour && this.hour < 17) {
            document.body.style.backgroundColor = day_colours[Math.floor(Math.random() * day_colours.length)];
        } else {
            document.body.style.backgroundColor = night_colours[Math.floor(Math.random() * night_colours.length)];
        }
    }

    // Start
    alternateBackgroundColor() {
        setInterval(this.changeBackgroundDayNight, time_change);
    }
}