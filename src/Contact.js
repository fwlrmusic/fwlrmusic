import React, { useState, useRef } from 'react'
import './resources/Contact.css'
import SocialLinks from './SocialLinks'
const nodemailer = require('nodemailer')

const Contact = () => {
  const formRef = useRef(null)
  const [personName, setName] = useState('')
  const [personEmail, setEmail] = useState('')
  const [personMessage, setMessage] = useState('')
  const [inputError, setInputError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  //
  const updateValue = e => {
    e.preventDefault()
    const inputName = e.target.name
    const data = e.target.value

    switch (inputName) {
      case 'personName':
        setName(data)
        break
      case 'personEmail':
        setEmail(data)
        break
      default:
        setMessage(data)
    }
  }

  const sendEmail = e => {
    e.preventDefault()
    const contactForm = formRef.current
    if (contactForm.checkValidity()) {
      setIsDisabled(true)
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      })
      const composedEmail = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New Contact Message from your FWLR Music React App: ' + personName + ' - ' + personEmail,
        text: personMessage
      }
      transporter.sendMail(composedEmail, (err, data) => {
        if (err) {
          console.error(err)
        } else {
          console.log('Your contact message has been sent')
          setIsDisabled(false)
        }
      })
      //
      // If user previously triggered an invalid input but has now reached this validated location:
      if (inputError) {
        setInputError(false)
      }
    } else {
      setInputError(true)
    }
  }

  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='contact-form'>
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type='text'
            placeholder='Name'
            name='personName'
            value={personName}
            onChange={updateValue}
            minLength='3'
            required
          />
          <input
            type='email'
            placeholder='Email'
            name='personEmail'
            value={personEmail}
            onChange={updateValue}
            required
          />
          <textarea
            name='personMessage'
            placeholder='Write your message here...'
            value={personMessage}
            onChange={updateValue}
            required
          />
          <div className='submit-button-container'>
            <input
              type='submit'
              value='Submit'
              disabled={isDisabled}
            />
          </div>
        </form>
        {
          inputError && (
            <p className='input-error'>Please fill out all fields in the format required</p>
          )
        }
        <SocialLinks />
      </div>
    </div>
  )
}

export default Contact
