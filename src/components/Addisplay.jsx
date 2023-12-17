import { useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { BiBath, BiBed } from 'react-icons/bi'
import { TbRulerMeasure } from 'react-icons/tb'
// import '../styles/Addisplay.scss'
import SizeDisplay from './SizeDisplay'

const Addisplay = ({ index, setdisplayMenu }) => {

  const [currentImage, setcurrentImage] = useState(0);
  const [sizeDisplay, setsizeDisplay] = useState(false);

  return (
    <div className="fixed h-full w-full backdrop-blur-md z-20 -translate-y-24">
      <div className="flex mx-[10vw] my-[8vh] overflow-hidden rounded-xl">
        <div className="w-[30%] flex flex-col p-3 items-center bg-black bg-opacity-80">
          <div className='w-full'><span className='text-xl my-4 cursor-pointer text-white pr-3 pt-3' onClick={() => setdisplayMenu(false)} >x</span></div>
          <div className='my-6 px-3'>
            <h1 className='text-white text-3xl font-semibold my-1'>{index.type.toUpperCase()}</h1>
            <h2 className='text-white text-lg my-1'>RS {parseInt(index.price).toLocaleString()} PKR</h2>
            <h3 className='text-red-500 font-semibold my-1'>{index.address.toUpperCase()}</h3>
            <div className='text-white my-5'>
              {index.description}
            </div>
            <div className='text-white border-t border-b border-white py-3 flex justify-between px-4'>
              <span className='flex items-center'><BiBed title='Beds' className='mx-1' />{index.beds}</span>
              <span className='flex items-center'><BiBath title='Baths' className='mx-1' />{index.baths}</span>
              <span className='flex items-center' onClick={() => setsizeDisplay(!sizeDisplay)}><TbRulerMeasure title='Size' className='mx-1' /><span style={{ "text-decoration": "underline", "cursor": "pointer" }}>{index.size}</span></span></div>
          </div>
          <div className='self-end relative'>
            {sizeDisplay && <SizeDisplay size={index.size} />}
          </div>
          <div className='w-full flex flex-wrap'>
            {
              index.features.map((ind,it)=>{
                return <span className='text-white w-max my-2 flex items-center whitespace-nowrap'><TiTick className='text-red-500 font-semibold mx-1' />{ind}</span>
              })
            }
          </div>
        </div>
        <div className="w-[70%] flex relative">
          <button className='absolute h-full w-[4vw] text-5xl text-transparent transition-all duration-300 bg-transparent hover:bg-[#80808066] hover:text-white' onClick={() => setcurrentImage((currentImage - 1 + index.imageData.length) % index.imageData.length)}>&lt;</button>
          <img src={index.imageData[currentImage]} alt='property-image' className='object-cover w-full h-full' />
          <button className='absolute right-0 h-full w-[4vw] text-5xl text-transparent transition-all duration-300 bg-transparent hover:bg-[#80808066] hover:text-white' onClick={() => setcurrentImage((currentImage + 1) % index.imageData.length)}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Addisplay