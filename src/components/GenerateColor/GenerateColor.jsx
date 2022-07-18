import PropTypes from 'prop-types'

import { useRef } from 'react'

import { cn } from '@bem-react/classname'

import './GenerateColor.css'

import createArray from './utils/createArray'
import getRandomColor from './utils/getRandomColor'

const cnGenerateColor = cn('GenerateColor')

const GenerateColor = ({ maxNum }) => {
  const colorArray = createArray(maxNum)
  const refColor = useRef([])

  const handleChangeColor = () => {
    for (let i = 0; i < maxNum; i += 1) {
      const color = getRandomColor()
      refColor.current[i].textContent = color
      refColor.current[i].style.backgroundColor = color
    }
  }

  return (
    <div className={cnGenerateColor()}>
      <div className={cnGenerateColor('ButtonWrapper')}>
        <button
          className={cnGenerateColor('Button')}
          type="button"
          onClick={handleChangeColor}
        >
          GENERATE
        </button>
      </div>
      <div className={cnGenerateColor('ColorBlocks')}>
        {colorArray.map((colorBlock, index) => (
          <div
            className={cnGenerateColor('ColorBlock')}
            key={colorBlock}
            ref={(el) => {
              refColor.current[index] = el
            }}
            style={{ backgroundColor: `${colorBlock}` }}
          >
            {colorBlock}
          </div>
        ))}
      </div>
    </div>
  )
}

GenerateColor.propTypes = {
  maxNum: PropTypes.number.isRequired,
}

export default GenerateColor
