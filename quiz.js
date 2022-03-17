const correctAnswers = ['B', 'B', 'B', 'B'];
//change correctAnswers array according to the answers
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    //stops default reload

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //checks the users answer by checking the form, then each question and then the 'value' they pick

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    // checks answer

    scrollTo(0,0);
    //result.querySelector('span').textContent = `${score}%`; <-- moved to timer function below for score animation
    result.classList.remove('d-none');
    //call on result variable, select span tag and change text content to update score
    //call on result variable to remove display none to show score on screen
    //scrollTo() method to move to the top after submitting answers

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else(
            output++
        )
    }, 10);
    //ouput starts at zero, timer function updates output by one until it matches score number
    //function to make score animated
});


