import React, { useState, useRef } from 'react'
import './resources/Contact.css'
import SocialLinks from './SocialLinks'

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

  const sendEmail = () => {
    const contactForm = formRef.current
    if (contactForm.checkValidity()) {
      setIsDisabled(true)
      // Prepare to send email
      const clientId = '563488244994-i7rg28cv020s1a7frlapbmouij831f3o.apps.googleusercontent.com'
      const apiKey = 'AIzaSyA3RSBiQoyzHGwHkodM8Ngybb3I5YRvA8w'
      const scopes = 'https://www.googleapis.com/auth/gmail.send'
      // const clientSecret: YcW67MoLzR0t9yW9_UfXv-zB
      //
      let email = ''
      const message = personName + '-' + personEmail + ' says:' + personMessage
      const headersObj = {
        To: 'fwlrmusic@gmail.com',
        Subject: 'New Contact Message from your FWLR Music web app'
      }
      //
      for (var header in headersObj) { email += header += ': ' + headersObj[header] + '\r\n' }
      email += '\r\n' + message
      //
      const sendRequest = gapi.client.gmail.users.messages.send({
        userId: clientId,
        resource: {
          raw: window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
        }
      })
      // Send contact email, then set isDisabled to false as the specified callback
      sendRequest.execute(setIsDisabled(false))
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
