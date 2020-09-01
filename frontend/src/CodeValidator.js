import React, { useState, useRef } from 'react'
import './resources/CodeValidator.css'
import SocialLinks from './SocialLinks'
import LoadingSpinner from './LoadingSpinner'

const CodeValidator = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const inputRef = useRef(null)
  const codeReturnRef = useRef(null)

  const runQuery = async userInput => {
    const response = await fetch(`/database/:${userInput}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response.text()
  }

  const queryDatabase = async e => {
    e.preventDefault()
    let inputValue
    let secretAnswer
    const input = inputRef.current
    const codeReturn = codeReturnRef.current
    codeReturn.textContent = ''
    setIsDisabled(true)
    if (input && codeReturn) {
      setIsValidating(true)
      inputValue = input.value
      runQuery()
      secretAnswer = await runQuery(inputValue).catch(console.dir)
      setIsValidating(false)
      setIsDisabled(false)
      if (secretAnswer) {
        console.log('secret answer: ', secretAnswer)
        codeReturn.textContent = 'Validated! Secret answer is: ' + secretAnswer
        codeReturn.style.color = 'rgb(0,255,0)'
      } else {
        codeReturn.textContent = 'This code is invalid'
        codeReturn.style.color = 'rgb(255,0,0)'
      }
    }
  }

  return (
    <div className='code-validator-container'>
      <form className='code-validator' onSubmit={queryDatabase}>
        <h1>Code Validator</h1>
        <input
          ref={inputRef}
          type='text'
          className='code-input'
          placeholder='Input secret code here'
          required
        />
        <div ref={codeReturnRef} className='code-return'>
          {
            isValidating && (
              <LoadingSpinner inline />
            )
          }
        </div>
        <input
          type='submit'
          className='submit-code'
          value='Submit'
          disabled={isDisabled}
        />
      </form>
      <SocialLinks />
    </div>
  )
}

export default CodeValidator
