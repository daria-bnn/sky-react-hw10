import getRandomColor from './getRandomColor'

const createArray = (maxValue) => {
  const array = []

  for (let i = 0; i < maxValue; i += 1) {
    array.push(getRandomColor())
  }

  return array
}

export default createArray
