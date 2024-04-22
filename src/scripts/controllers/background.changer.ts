
// Initialize variables
var colors = ['#ff0000', '#000000']; // [day, night]
var time_change = 1000

// Just a class to alternate between background colors (will expand to be more )
export default class BackgroundController {
    private hour: number;

    constructor() {
        this.alternateBackgroundColor();
    }

    // Check if it's night time (e.g., between 7pm and 6am)
    changeBackgroundDayNight() {
        // Get time
        this.hour = new Date().getHours();

        //Change background color
        if (this.hour >= 19 || this.hour < 6) {
            document.body.style.backgroundColor = colors[0];
        } else {
            document.body.style.backgroundColor = colors[1];
        }
    }

    // Start
    alternateBackgroundColor() {
        setInterval(this.changeBackgroundDayNight, time_change);
    }
}