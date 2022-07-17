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

export default Tooltip
