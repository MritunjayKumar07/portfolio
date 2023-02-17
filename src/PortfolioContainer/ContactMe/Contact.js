import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Contact Me</span>
          <form action='https://formspree.io/f/mgebkwgr' method='POST'>
            <input name='name' type='text' placeholder='display name' required autoComplete='off' />
            <input name='email' type='email' placeholder='email' required autoComplete='off' />
            <input name='number' type='number' placeholder='mobile number' required autoComplete='off' />
            <textarea name='message' className='input' placeholder='Message'></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
