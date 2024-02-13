$(document).ready(function() {
    const startingMinutes = 1;
    let time = startingMinutes * 60;
    let score = 0; // Initialize score
    const countdownEl = $('#countdown');
    const answerButtons = $('.btn'); // Get all answer buttons
    const interval = setInterval(updateCountdown, 1000);
    
    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        countdownEl.html(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
        
        if (time === 0) {
            clearInterval(interval);
            // Navigate to the next question page
            window.location.href = "ThankyouTough.html";
        }
        
        time--;
    }
    
    answerButtons.click(function() {
        clearInterval(interval);
        const selectedAnswer = $(this).text().trim(); // Get the selected answer
        
        answerButtons.each(function(index) {
            if (index === 2) { // Second option
                if ($(this).text().trim() === "8 balls") {
                    $(this).css("background-color", "green");
                }
            } else {
                $(this).css("background-color", "red");
            }
        });
        
        if (selectedAnswer === "8 balls") {
            score++; // Increment score if the answer is correct
            // Display the current score
            alert(`Correct Answer. Marks achieved: ${score}/1`);
        } else {
            // Display the current score
            alert(`Wrong Answer. Marks achieved: ${score}/1`);
        }
        
        // Navigate to the next question page
        window.location.href = "ThankyouTough.html";
    });
});
