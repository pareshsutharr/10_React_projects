import React from 'react'
import style from './ContectHeader.module.css'
const ContectHeader = () => {
  return (
    <div>
        <div className={`${style.contect_section} container`}>
            <h1>Contact Us</h1>
            <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="" />
        </div>
    </div>
  )
}
export default ContectHeader;