import '../styles/SizeDisplay.scss'

const SizeDisplay = ({size}) => {
  return (
    <div className='size-display'>
        <p>{`${Math.floor(size/20)} Kanals and ${size%20} Marlas`}</p>
        <p>{size*272.251} ft²</p>
    </div>
  )
}

export default SizeDisplay