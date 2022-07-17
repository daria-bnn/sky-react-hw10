import useCheckValid from './hooks/useCheckValid'
import Tooltip from './Tooltip/Tooltip'
import checkValue from './utils/checkValue'

const { useState, useRef } = require('react')

const LoginPass = () => {
  const [dirty, setDirty] = useState(false)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const refEmail = useRef(null)
  const refPas = useRef(null)

  const useCheckEmail = useCheckValid(
    form.email,
    { isEmpty: true, isValidEmail: true },
    dirty
  )

  const useCheckPas = useCheckValid(
    form.password,
    { isEmpty: true, isLength: 6 },
    dirty
  )

  const { email, password } = form

  const handleFieldInput = (event) => {
    const { target } = event

    setForm((prev) => ({ ...prev, [target.name]: target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setDirty(true)

    if (
      checkValue(refEmail.current.value, { isEmpty: true, isValidEmail: true })
    ) {
      refEmail.current.focus()
    }

    if (checkValue(refPas.current.value, { isEmpty: true, isLength: 6 })) {
      refPas.current.focus()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit">Войти</button>
    </form>
  )
}

export default LoginPass
