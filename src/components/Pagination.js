import {useDispatch, useSelector} from 'react-redux'
import { setCurrentQuestion } from '../features/quiz/quizSlice'
import { PaginationItem } from '../global.styles'

export default function Pagination() {

  const dispatch = useDispatch()
  const { currentQuestion, answers, questions } = useSelector(state => state.quiz)

  const clickHandler = (index) => 
    dispatch(setCurrentQuestion(index +1))

  const getAnswer = (question) => answers.find(ans => ans.id === question.id)

  return (
    <div className="w-full py-3">
        <ul className='grid grid-cols-10'>
            {questions?.map((item, index) => (
              <PaginationItem answer={getAnswer(item)} isActive={currentQuestion === index +1} key={index}>
                <button className='py-1 w-full' onClick={() => clickHandler(index)}>{index + 1}</button>
              </PaginationItem>
            ))}
        </ul>
    </div>
  )
}
