import { useEffect, useState } from 'react'

import checkValue from '../utils/checkValue'

const validInput = (initValue, rules, sendingForm) => {
  const [error, setError] = useState()

  useEffect(() => {
    if (!sendingForm) {
      return
    }

    setError(checkValue(initValue, rules))

    // if (!initValue && rules.isEmpty) {
    //   setError('Поле не может быть пустым')
    //   return
    // }

    // if (rules.isValidEmail && !initValue.match(REG_EMAIL)) {
    //   setError('Неккоректный email')
    //   return
    // }

    // if (rules.isLength && initValue.length < rules.isLength) {
    //   setError(`Поле должно содержать более ${rules.isLength} символов`)
    //   return
    // }

    // setError('')
  }, [initValue, sendingForm])

  return error
}

export default validInput
