import React, { useState, useRef } from 'react'
import './resources/CodeValidator.css'
import SocialLinks from './SocialLinks'
import LoadingSpinner from './LoadingSpinner'
//
const MongoClient = require('mongodb').MongoClient
// const uri = 'mongodb+srv://fwlrGrandPrix:vtYefRZKiHI19kBJ@cluster0.1ok79.mongodb.net/fwlrgrandprix?retryWrites=true&w=majority'
// const client = new MongoClient(uri, { useNewUrlParser: true })

const CodeValidator = () => {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const inputRef = useRef(null)
  const codeReturnRef = useRef(null)

  const runQuery = userInput => {
    setTimeout(() => setIsValidating(false), 2000)
    // client.connect(err => {
    //   const collection = client.db('test').collection('devices')
    //   console.log('hi')
    //   client.close()
    //   if (err) {
    //     console.error(err)
    //   }
    // })

    // try {
    //   await client.connect()
    //   console.log('Connected correctly to server')
    //   const database = client.db('cluster0')
    //   const myCollection = database.collection('fwlrGrandPrix')
    //   const secretAnswer = await myCollection.findOne({ name: userInput }, { _id: 0 })
    //   return secretAnswer[userInput]
    // } catch (err) {
    //   console.error(err.stack)
    // } finally {
    //   await client.close()
    // }
  }

  const queryDatabase = e => {
    e.preventDefault()
    setIsDisabled(true)
    const input = inputRef.current
    const codeReturn = codeReturnRef.current
    // let inputValue
    // let secretAnswer
    if (input && codeReturn) {
      setIsValidating(true)
      // inputValue = input.value
      runQuery()
      // secretAnswer = runQuery(inputValue).catch(console.dir)
      // setIsValidating(false)
      // setIsDisabled(false)
      // if (secretAnswer) {
      //   console.log(secretAnswer)
      //   codeReturn.textContent = 'Validated! Secret answer is: ' + secretAnswer
      //   codeReturn.style.color = 'rgb(0,255,0)'
      // } else {
      //   codeReturn.textContent = 'This code is invalid'
      //   codeReturn.style.color = 'rgb(255,0,0)'
      // }
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
