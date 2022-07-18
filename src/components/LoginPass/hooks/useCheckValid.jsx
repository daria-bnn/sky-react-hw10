import { useEffect, useState } from 'react'

import checkValue from '../utils/checkValue'

const useCheckValid = (initValue, rules, sendingForm) => {
  const [error, setError] = useState()

  useEffect(() => {
    if (!sendingForm) {
      return
    }

    setError(checkValue(initValue, rules))
  }, [initValue, sendingForm])

  return error
}

export default useCheckValid
