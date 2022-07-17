const REG_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const checkValue = (initValue, rules) => {
  let error = ''

  if (!initValue && rules.isEmpty) {
    error = 'Поле не может быть пустым'
    return error
  }

  if (rules.isValidEmail && !initValue.match(REG_EMAIL)) {
    error = 'Неккоректный email'
    return error
  }

  if (rules.isLength && initValue.length < rules.isLength) {
    error = `Поле должно содержать более ${rules.isLength} символов`
    return error
  }

  return error
}

export default checkValue
