export default function calculate(answers) {
    const lengthQuestion = answers.length
    const correctAnswers = (answers.filter(ans => ans.isTrue)).length
    const calculatedBall = {correctAnswers : correctAnswers + '/' + lengthQuestion, procent: (100 / lengthQuestion) * correctAnswers}
    return calculatedBall
}