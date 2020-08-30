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
      //
      // Google API project credentials
      // const clientId = '563488244994-i7rg28cv020s1a7frlapbmouij831f3o.apps.googleusercontent.com'
      // const apiKey = 'AIzaSyA3RSBiQoyzHGwHkodM8Ngybb3I5YRvA8w'
      // const scopes = 'https://www.googleapis.com/auth/gmail.send'
      // const clientSecret: YcW67MoLzR0t9yW9_UfXv-zB
      //
      // Prepare email related vars
      // let email = ''
      // const message = personName + '-' + personEmail + ' says:' + personMessage
      // const headersObj = {
      //   To: 'fwlrmusic@gmail.com',
      //   Subject: 'New Contact Message from your FWLR Music web app'
      // }
      //
      // Format email to send
      // for (var header in headersObj) { email += header += ': ' + headersObj[header] + '\r\n' }
      // email += '\r\n' + message
      //
      // Send contact email, then set isDisabled to false as the specified callback
      // const sendRequest = gapi.client.gmail.users.messages.send({
      //   userId: clientId,
      //   resource: {
      //     raw: window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
      //   }
      // }).execute(setIsDisabled(false))
      //
      // Initialize instance of google client and fire email request
      // const start = () => {
      //   gapi.client.init({ clientId, apiKey, scopes }).then(() => {
      //     return sendRequest
      //   }).then(response => {
      //     console.log(response)
      //   }, err => {
      //     console.error('Error: ' + err)
      //   })
      // }
      //
      // Send email upon loading of the google api script
      // const sendEmail = () => { gapi.load('client', start) }
      //
      // Load Google API script
      // const script = document.createElement('script')
      // const documentHead = document.getElementsByTagName('head')[0]
      // script.type = 'text/javascript'
      // script.src = 'https://apis.google.com/js/api.js'
      // documentHead.appendChild(script)
      // if (script.readyState) {
      //   script.onreadystatechange = () => {
      //     if (script.readyState === 'loaded' || script.readyState === 'complete') {
      //       script.onreadystatechange = null
      //       sendEmail()
      //     }
      //   }
      // } else {
      //   script.onload = () => {
      //     sendEmail()
      //   }
      // }
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
