import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button, ButtonBase } from '@mui/material'
import { VariantButton } from '../global.styles'

import { setCurrentQuestion, selectVariant, getAnswer, getFinish, reStart } from '../features/quiz/quizSlice'

import Modal from './Modal'
import calculateTotal from '../utils/calculateTotal'

export default function QuizCard() {

  const [totalBall, setTotalBall] = useState(null)
  const {questions, currentQuestion, answers, isFinish} = useSelector(state => state.quiz)

  const question = questions[currentQuestion -1]
  const answer = answers.find(ans => ans.id === question.id)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const calculateTotalBall = () => {
    if(isFinish){
      navigate('/')
      dispatch(reStart())
    } else {
      dispatch(getFinish(true))
      setTotalBall(calculateTotal(answers))
    }
  }

  const clickHendler = (value) => {
    if(!isFinish && !answer.getChecked)
      dispatch(selectVariant(value))
  }

  const next = () => 
    dispatch(setCurrentQuestion(currentQuestion +1))
  
  const prev = () => 
    dispatch(setCurrentQuestion(currentQuestion -1))

  const submitAnswer = () => {
    dispatch(getAnswer({...answer, isTrue: answer.selectedValue === question.correct_answer}))
    const allGetChecked = answers.filter((ans => ans.id !== answer.id)).every(ans => ans.getChecked)
    if(allGetChecked)
      calculateTotalBall()
  }

  return (
    <div className='mt-3'>
      <Modal totalBall={totalBall} setTotalBall={setTotalBall} />
      <div className='border border-gray-300 rounded'>
        <div className='flex items-center justify-between p-4'>
          <h2 className="text-lg font-bold">Question No {currentQuestion} of {questions.length}</h2>
          <Button onClick={calculateTotalBall} variant='contained' color='error'>{isFinish ? 'Restrat':'Finish'}</Button>
        </div>
        <div className="p-4 border-b border-gray-700 bg-gray-300">
          <h2>{question?.question}</h2>
        </div>
        <div className="p-4">
          <ul>
            {
              question?.incorrect_answers
                .map((variant, index) => (
                  <li key={index}>
                    <ButtonBase 
                      onClick={() => clickHendler({id: question.id, variant})} sx={{width: '100%'}}>
                        <VariantButton getChecked={answer.getChecked} correctValue={question.correct_answer === variant} isSelected={answer.selectedValue === variant}>
                          {variant}
                        </VariantButton>
                    </ButtonBase>
                  </li>
              ))
            }
          </ul>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <Button disabled={currentQuestion === 1} onClick={prev} variant='contained'>Previous</Button>
            <Button 
              variant='contained' 
              color='secondary' 
              disabled={!answer?.selectedValue || isFinish || answer.getChecked} 
            onClick={submitAnswer}>Submit</Button>
            <Button disabled={currentQuestion === questions.length} onClick={next} variant='contained'>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
