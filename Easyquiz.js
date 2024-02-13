$(document).ready(function() {
    const startingMinutes = 1;
    let time = startingMinutes * 60;
    let score = 0;
    let currentQuestion = 1; // Initialize current question
    const countdownEl = $('#countdown');
    const answerButtons = $('.btn');
    const interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        countdownEl.html(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);

        if (time === 0) {
            clearInterval(interval);
            navigateToNextQuestion();
        }

        time--;
    }

    answerButtons.click(function() {
        clearInterval(interval);
        const selectedAnswer = $(this).text().trim();
        const correctAnswer = getCurrentCorrectAnswer();

        answerButtons.each(function(index) {
            if (index === correctAnswer.index) {
                $(this).css("background-color", "green");
            } else {
                $(this).css("background-color", "red");
            }
        });

        if (selectedAnswer === correctAnswer.answer) {
            score++;
            alert(`Correct Answer. Your current score: ${score}`);
        } else {
            alert(`Wrong Answer. Your current score: ${score}`);
        }

        navigateToNextQuestion();
    });

    function navigateToNextQuestion() {
        currentQuestion++;
        if (currentQuestion <= 2) {
            window.location.href = `EasyQ${currentQuestion}.html`;
        } else {
            // Display final score or navigate to a results page
            alert(`Quiz completed! Your final score: ${score}`);
            // You can also redirect to a results page if needed.
        }
    }

    function getCurrentCorrectAnswer() {
        // Define the correct answers for each question
        const correctAnswers = [
            { index: 1, answer: "Ms Dhoni" }, // Correct answer for question 1
            { index: 3, answer: "MS Dhoni" }, // Correct answer for question 2
            // Add more correct answers for other questions
        ];

        return correctAnswers[currentQuestion - 1];
    }
});
