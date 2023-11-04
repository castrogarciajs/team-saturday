import {registerUser} from '../firebase/app.js'
import {useRef, useState} from 'react'
import {useNavigate} from'react-router-dom'


export function LoginPage() {
    const [messageError, setMessageError] = useState('')
    const form = useRef(null)
    const navigate = useNavigate()
  
    const handleSubmit = (event) => {
      event.preventDefault()
      if(!form.current) return
      if(!form.current.email.value) return setMessageError('Email is required')
      if(!form.current.password.value) return setMessageError('Password is required')
      if(form.current.password.value.length < 6) return setMessageError('Password must be at least 6 characters')
      setMessageError('')
      registerUser(form.current.email.value, form.current.password.value)
      form.current.reset()
      navigate('/')
    }
     
    return (
        <>
          <h1>Authenticacion</h1>
          <small>{messageError}</small>
          <form action="#" ref={form} onSubmit={handleSubmit}>
            <label htmlFor="email">
              <input type="email" name="email" required />
            </label>
            <label htmlFor="password">
              <input type="password" name="password" required />
            </label>
            <button type="submit">Login</button>
          </form>
          <a href="#">Google</a>
        </>
      )
}