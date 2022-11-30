import React from 'react'
import './Button.css'

function Button({number, handleChange}) {

    return (
        <button 
            className='circle'
            name="button"
            onClick={handleChange}
            value={number}
        >
            {number}
        </button>
  )
}


export default Button