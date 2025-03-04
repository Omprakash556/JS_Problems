function convertTemperature(value, type) {
    if (value < 0 || value > 100) {
        console.log("Temperature should be between 0°C and 100°C (32°F to 212°F).");
        return;
    }

    switch (type.toLowerCase()) {
        case "c":
            console.log(`${value}°C is ${(value * 9/5) + 32}°F`);
            break;
        case "f":
            if (value < 32 || value > 212) {
                console.log("Temperature should be between 32°F and 212°F.");
                return;
            }
            console.log(`${value}°F is ${((value - 32) * 5/9).toFixed(2)}°C`);
            break;
        default:
            console.log("Invalid selection. Choose 'C' for Celsius or 'F' for Fahrenheit.");
    }
}
// Example Calls
convertTemperature(30, "C");
convertTemperature(86, "F");