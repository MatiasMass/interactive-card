import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import thank from '../assets/illustration-thank-you.svg'
import './NextCard.css'

function NextCard() {

    const {id} = useParams()
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')        
    }, 5000);

  return (
    <div className='card2'>
        <div className="image">
            <img src={thank} alt="" />
        </div>
        <div className="number-selected">
            You selected {id} out of 5
        </div>
        <h3>Thank you!</h3>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support, 
            don't hesitate to get in touch!
        </p>
    </div>
  )
}

export default NextCard