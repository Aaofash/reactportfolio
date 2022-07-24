import React from 'react'
export default function Footer() {
    return(
        <div className='footer-div'>
            <a href='https://twitter.com/Aaofash1?t=CD6jytqgQcn_LW_fXS56aA&s=03'>
                <button className='twitter-btn'>
                    <img src='../images/twitter.png' alt="" className='twitter-pic'/>
                </button>
            </a>
            <a href='https://www.facebook.com/profile.php?id=100083787000843'>
                <button className='facebook-btn'>
                    <img src='../images/facebook.png' alt="" className='facebook-pic'/>
                </button>
            </a>
            <button className='instagram-btn'>
                <img src='../images/instagram.png' alt="" className='instagram-pic'/>
            </button>
            <a href='https://github.com/Aaofash'>
                <button className='github-btn'>
                    <img src='../images/github.png' alt="" className='github-pic'/>
                </button>
            </a>
        </div>
        )
}