import styles from './Navigation.module.css';
import React from 'react';

const Navigation = () => {
  // console.log(styles); 
  return (
  
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
            <img src="/images/logo.png" alt="" />
        </div> 
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
    </nav>
  )
}

export default Navigation