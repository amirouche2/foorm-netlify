import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className='contact'>
    <form name="contact" method="post" className='forma'
    data-netlify='true'
    onSubmit='submit'
    >

            <input type="hidden" name="form-name" value="contact" />    

            <label for='name'>nom: </label>
            <input type="text" name="name"/>

            <label for='email'>  Email: </label>
            <input type="email" name="email"/>

 
            <label for='message'>Message: </label>
            <textarea name="message"></textarea>
  
            <button type="submit">envoyer</button>

        </form>,

        </div>
    )
}

export default ContactForm
