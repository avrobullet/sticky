
// Initialize variables
var colors = ['#ff0000', '#000000']; // [day, night]
var night_colours = ['#36454F', '#006400', '#808080', '#800080', '#191970']
var time_change = 5000

// Just a class to alternate between background colors (will expand to be more )
export default class BackgroundController {
    private hour: number;

    constructor() {
        this.changeBackgroundDayNight();
        this.alternateBackgroundColor();
    }

    // Check if it's night time (e.g., between 7pm and 6am)
    changeBackgroundDayNight() {
        // Get time
        this.hour = new Date().getHours();

        //Change background color
        if (this.hour >= 19 || this.hour < 6) {
            document.body.style.backgroundColor = night_colours[3];
        } else {
            document.body.style.backgroundColor = night_colours[Math.floor(Math.random() * night_colours.length)];
        }
    }

    // Start
    alternateBackgroundColor() {
        setInterval(this.changeBackgroundDayNight, time_change);
    }
}