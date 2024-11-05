import React, { useState } from 'react'
import styles from './ContectForm.module.css';
import { MdOutlineMessage } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";


const ContectForm = () => {

    const[name,setname] = useState('Paresh');
    const[email,setemail] = useState('pareshsutharr@gmail.com');
    const[text,settext] = useState('Learning React!!!');

    const ViaCallButton = ()=>{
        console.log('viaCallButton');
    }
    const ViaChatButton = ()=>{
        console.log('viaChatButton');
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        setname(event.target[0].value);
        setemail(event.target[1].value);
        settext(event.target[2].value);

    console.log("Name : " , event.target[0].value);
    console.log("Email : " , event.target[1].value);
    console.log("Text : " , event.target[2].value);
    }

  return (
    <div className={`${styles.ContectForm}  container` }>
        <div className={`${styles.form_section}`}>
            <div className={`${styles.form_button}`}>
                <button onClick={ViaChatButton}>
                <MdOutlineMessage />&nbsp;

                     VIA SUPPORT CHAT</button>
                <button onClick={ViaCallButton}>
                <MdOutlineAddIcCall />&nbsp;
                 VIA CALL</button>
            </div>
              <button className={`${styles.email}`}><MdOutlineMessage fontSize="20px" /> &nbsp;VIA FROM EMAIL</button>
            <div className={`${styles.form}`}>
                <form onSubmit={onSubmit}>
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" id="" />
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="" />
                    <label htmlFor="text">TEXT</label>
                   <textarea name="text" id=""></textarea>
                   <input type="submit" className={`${styles.submit}`} value="SUBMIT" ></input>
                </form>
                {text && (
                     <div>{name + " | " +  email + " | " + text}</div>
                )}
            </div>
        </div>
        <div className="form_image">
            <img src="/images/Service.png" alt="" />
        </div>
    </div>
  )
}

export default ContectForm;