import React from 'react'
export default function Buttons() {
    return(
        <div className='buttons-div'>
            <a href="mailto:adedamolafasakin7@gmail.com">
                <button type="submit" className='email-btn'><img src='../images/email.png' alt="" className='email-pic'/>Email</button>
            </a>
            <a href='https://www.linkedin.com/in/adedamola-fasakin-75812123a'>
                <button type="submit" className='linked-btn' ><img src='../images/91020.png' alt="" className='linked-pic'/>LinkedIn</button>
            </a>
        </div>
    )
}