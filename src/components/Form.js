import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import {Select, MenuItem, Button} from '@mui/material'

export default function Form() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({amount: 10, category: 21})

  const submitHandler = (e) => {
    e.preventDefault()
    const { category, amount } = formData
    
    navigate(`/quiz/${category}/${amount}`)
  }

  const handleChange = (e) => 
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

  return (
    <div className='w-wull'>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='select-number' className='text-sm text-gray-400' >Number of questions:</label>
            <Select
              labelId="demo-simple-select-label"
              id="select-number"
              size='small'
              value={formData.amount}
              onChange={handleChange}
              fullWidth
              name='amount'
              variant='standard'
              className='mt-1'
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>

          <div className='mt-3'>
            <label htmlFor='select-category' className='text-sm text-blue-800' >Category:</label>
            <Select
              labelId="demo-simple-select-label"
              id="select-category"
              size='small'
              value={formData.category}
              fullWidth
              variant='standard'
              className='mt-1'
              name='category'
              onChange={handleChange}
            >
              <MenuItem value={21}>Sport</MenuItem>
              <MenuItem value={23}>Hitory</MenuItem>
            </Select>
          </div>
          <div className="mt-3">
            <Button type='submit' fullWidth variant='contained' bg='success'>Start</Button>
          </div>
        </form>
        
    </div>
  )
}
