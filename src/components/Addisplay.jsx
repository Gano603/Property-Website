import { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { BiBath, BiBed } from 'react-icons/bi'
import { TbRulerMeasure } from 'react-icons/tb'
import '../styles/Addisplay.scss'
import SizeDisplay from './SizeDisplay'

const Addisplay = ({ index, setdisplayMenu }) => {

  const [currentImage, setcurrentImage] = useState(0);
  const [sizeDisplay, setsizeDisplay] = useState(false);

  return (
    <div className="main-window">
      <div className="display-window">
        <div className="detail-window">
          <div className='exit-button'><span onClick={() => setdisplayMenu(false)} >x</span></div>
          <div className='details-section'>
            <h1>{index.type.toUpperCase()}</h1>
            <h2>RS {index.price}</h2>
            <h3>{index.address.toUpperCase()}</h3>
            <div className='detail-description'>
              {index.description}
            </div>
            <div>
              <span><BiBed title='Beds' />{index.beds}</span>
              <span><BiBath title='Baths' />{index.baths}</span>
              <span onClick={() => setsizeDisplay(!sizeDisplay)}><TbRulerMeasure title='Size' /><span style={{ "text-decoration": "underline", "cursor": "pointer" }}>{index.size}</span></span></div>
              {sizeDisplay && <SizeDisplay size={index.size}/>}
          </div>
        </div>
        <div className="image-window">
          <button className='change-button' onClick={() => setcurrentImage((currentImage - 1 + index.imageData.length) % index.imageData.length)}>&lt;</button>
          <img src={index.imageData[currentImage]} alt='property-image' />
          <button className='change-button' onClick={() => setcurrentImage((currentImage + 1) % index.imageData.length)}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Addisplay