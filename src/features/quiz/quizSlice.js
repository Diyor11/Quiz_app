import {createSlice} from '@reduxjs/toolkit'
import shuffleArr from '../../utils/shuffleArr'

const initialState = {
    questions: [],
    answers: [],
    currentQuestion: 1,
    isFinish: false
}

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuestions: (state, {payload}) => {
            state.questions = payload.map(
                (question) => {
                    const { incorrect_answers, correct_answer } = question
                    const newVariants = shuffleArr(incorrect_answers, correct_answer)
                    return {...question, incorrect_answers: newVariants}
                }
            )
            state.answers = payload.map(question => ({selectedValue: '', id: question.id, getChecked: false, isTrue: false}))
        },
        setCurrentQuestion: (state, {payload}) => {
            state.currentQuestion = payload
        },
        selectVariant: (state, {payload}) => {
            state.answers = state.answers.map(
                (answer) => (
                    answer.id === payload.id ? {...answer, selectedValue: payload.variant}:answer)
                )
        },
        getAnswer: (state, {payload}) => {
            state.answers = state.answers.map(
                (answer) => (
                    answer.id === payload.id ? {...answer, getChecked: true, isTrue: payload.isTrue}:answer)
                )
        },
        getFinish: (state) => {
            state.isFinish = true
            state.answers = state.answers.map(ans => {
                const isCorrect = ans.selectedValue === (state.questions.find(q => q.id === ans.id)).correct_answer
                return {...ans, getChecked: true, isTrue: ans.selectedValue === '' ? false:isCorrect}
            })
        },
        reStart: (state) => {
            state.currentQuestion = 1
            state.isFinish = false
        }
    }
})

export const { 
    setQuestions, 
    setCurrentQuestion, 
    increaseCurrentQuestion, 
    decreaseCurrentQuestion ,
    selectVariant,
    getAnswer,
    calculateTotalBall,
    getFinish,
    reStart
} = quizSlice.actions
export default quizSlice.reducer