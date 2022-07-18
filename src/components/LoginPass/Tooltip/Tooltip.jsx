import PropTypes from 'prop-types'

const Tooltip = ({ anchorRef, textError, dirty }) => {
  if (!dirty) {
    return null
  }

  const anchor = anchorRef.current

  const coords = anchor.getBoundingClientRect()

  const { top, left } = coords

  return (
    <div
      style={{
        position: 'absolute',
        top: `calc(${top}px + 20px)`,
        left: `${left}px`,
      }}
    >
      {textError}
    </div>
  )
}

Tooltip.propTypes = {
  anchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  textError: PropTypes.string,
  dirty: PropTypes.bool,
}

Tooltip.defaultProps = {
  anchorRef: null,
  textError: '',
  dirty: false,
}

export default Tooltip
