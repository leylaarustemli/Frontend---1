import React from 'react'
import "./Section1.css"
const Section1 = () => {
  return (
    <div className='section1'>
<div className="container">
    <h3>Tasty & Delicios Food</h3>
    <p>Book a table</p>
    <div className="input">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Phone' />
        <input type="text" placeholder='M/D/YY'/>
        <input type="text" placeholder='Time'/>
        <input type="text" placeholder='Person' />
        <button>Book a table</button>
    </div>
</div>
    </div>
  )
}

export default Section1
