let score = 0;
let currentAnswer = 0;

function randomProblem() {
    const operators = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operators[Math.floor(Math.random() * operators.length)];

    let question = '';
    switch (operation) {
        case '+':
            question = `${num1} + ${num2}`;
            currentAnswer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            currentAnswer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            currentAnswer = num1 * num2;
            break;
        case '/':
            question = `${num1} / ${num2}`;
            currentAnswer = parseFloat((num1 / num2).toFixed(3));
            break;
    }
    document.getElementById('question').innerText = `What is ${question}?`;
}

function checkAnswer() {
    const guess = parseFloat(document.getElementById('answer').value);
    if (isNaN(guess)) {
        document.getElementById('feedback').innerText = 'Please enter a valid number.';
        return;
    }

    if (guess === currentAnswer) {
        score += 1;
        document.getElementById('feedback').innerText = 'Correct!';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect. Game Over.';
        document.getElementById('question').innerText = '';
        document.getElementById('answer').disabled = true;
        document.getElementById('retry').style.display = 'block';
        return;
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('answer').value = '';
    randomProblem();
}

function restartGame() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('feedback').innerText = '';
    document.getElementById('answer').disabled = false;
    document.getElementById('retry').style.display = 'none';
    randomProblem();
}

randomProblem();