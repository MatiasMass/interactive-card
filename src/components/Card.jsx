import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import star from '../assets/icon-star.svg'
import './Card.css'

function Card() {
    const [numberSelected, setNumberSelected] = useState(1)

    const handleChange = (e) => {
        setNumberSelected(e.target.value)
    }
    
    // console.log(numberSelected);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Se envio', numberSelected);
        navigate(`/selected/${numberSelected}`)
    }

  return (
    <div className='card'>
        <div className="content">
            <div className='star'>
                <img src={star} alt="" />
            </div>
            <h2>How did we do?</h2>
            <p>
                Please let us know how we did with your support request. All feedback is appreciated  to help us improve our offering!
            </p>
        </div>
        <div className="buttons">
            <Button number = "1" handleChange = {handleChange} />
            <Button number = "2" handleChange = {handleChange} />
            <Button number = "3" handleChange = {handleChange} />
            <Button number = "4" handleChange = {handleChange} />
            <Button number = "5" handleChange = {handleChange} />
        </div>
        <form onSubmit={handleSubmit}>
            <button className='button-submit'>Submit</button>
        </form>
    </div>
  )
}

export default Card