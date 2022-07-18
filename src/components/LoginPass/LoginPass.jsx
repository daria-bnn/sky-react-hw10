import { useState, useRef } from 'react'

import { cn } from '@bem-react/classname'

import './LoginPass.css'

import useCheckValid from './hooks/useCheckValid'
import Tooltip from './Tooltip/Tooltip'

import checkValue from './utils/checkValue'

const cnLoginPass = cn('LoginPass')

const LoginPass = () => {
  const FORM_INIT = { email: '', password: '' }

  const RULES_EMAIL = { required: true, isValidEmail: true }
  const RULES_PASSWORD = { required: true, minLength: 6 }

  const [dirty, setDirty] = useState(false)

  const [form, setForm] = useState(FORM_INIT)

  const refEmail = useRef(null)
  const refPas = useRef(null)

  const useCheckEmail = useCheckValid(form.email, RULES_EMAIL, dirty)
  const useCheckPas = useCheckValid(form.password, RULES_PASSWORD, dirty)

  const { email, password } = form

  const handleFieldInput = (event) => {
    const { target } = event

    setForm((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setDirty(true)

    if (checkValue(refEmail.current.value, RULES_EMAIL)) {
      refEmail.current.focus()
    }

    if (checkValue(refPas.current.value, RULES_PASSWORD)) {
      refPas.current.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cnLoginPass()}>
      <label htmlFor="email">
        Ваш email
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleFieldInput}
          ref={refEmail}
        />
        <Tooltip anchorRef={refEmail} textError={useCheckEmail} dirty={dirty} />
      </label>

      <label htmlFor="password">
        Пароль
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleFieldInput}
          ref={refPas}
        />
        <Tooltip anchorRef={refPas} textError={useCheckPas} dirty={dirty} />
      </label>

      <button type="submit" className={cnLoginPass('Button')}>
        Войти
      </button>
    </form>
  )
}

export default LoginPass
