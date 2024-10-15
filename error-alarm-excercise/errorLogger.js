// Variables to configure on each environment 
// .env
const TIME_WINDOW = 60 * 1000; // 1 minute
const MAX_ERRORS_ALLOWED = 2; // Max errors allowed on a TIME_WINDOW

let errorsOcurred = 0; // counter of error occurred on this time window
let emailSent = false; // Flag to avoid email spam

function sendEmailNotification() {
    // Send email notification
    // Should implement logic
    console.log("[sendEmailNotification] MAX_ERRORS_ALLOWED exceeded. Email sent.");
}

// Error logging function that also tracks error frequency for alarming
// Using same name as the old function to prevent refactoring all occurrences
function logError(error) {
    // Call the legacy function that logs the error on a file
    logErrorToFile(error);
    
    errorsOcurred ++;

    // If the number of errors exceeds the MAX_ERRORS_ALLOWED and an email wasn't sended
    if (errorsOcurred > MAX_ERRORS_ALLOWED && !emailSent) {
        sendEmailNotification(); // Trigger the alarm
        emailSent = true; // Set the alarm flag

        // Reset the alarm flag and the counter after the time window has passed
        setTimeout(() => {
            emailSent = false;
            errorsOcurred = 0;
        }, TIME_WINDOW);
        // I could use a var setting the first error of the time window timestamp
        // instead of the `setTimeout`.
        // I decided to use the timeout cause it simplify the code, make it more legible
        // and easier to mantain.
        // Also it's reduce the probability of human or logic errors working with timestamps.
    }
}

function logErrorToFile(error) {
    // Write error details on a file
    console.log("[logErrorToFile] Logged error:", error.message);
}

// Example of logError function
logError(new Error("1 application error"));
logError(new Error("2 application error"));
logError(new Error("3 application error"));
logError(new Error("4 application error"));

