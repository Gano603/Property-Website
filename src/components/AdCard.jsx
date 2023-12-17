import {TiTick} from 'react-icons/ti'
import {BiBath, BiBed} from 'react-icons/bi'
import {TbRulerMeasure} from 'react-icons/tb'

const Feature = ({feature_name})=>{
  return(
    <span className='w-1/2 flex items-center'><TiTick className='text-green-500 mx-1' />{feature_name}</span>
  )
}

const AdCard = ({ imageUrl, type, price, beds , baths , size , address , features , setdisplayMenu , setdisplayAd , iter}) => {


  return (
    <div className="flex px-4 py-4 rounded-2xl bg-gray-100 my-4 border-gray-300 border cursor-pointer" onClick={()=>{
    setdisplayMenu(true)
    setdisplayAd(iter)}}
    >
      <div>
        <img className='rounded-lg w-96 h-64' src={imageUrl} alt="Apartment" />
      </div>
      <div className="mx-6 w-full">
        <h2 className='text-3xl font-semibold'>{type}</h2>
        <h3 className='text-xl font-medium'>PKR {price}</h3>
        <h5 className='text-sm font-medium'>{address}</h5>
        <hr className='border-gray-400 my-2' />
        <div className='flex justify-between items-center w-full px-3'>
          <div className='flex items-center'><BiBed title='Bedrooms'/><span className='mx-1'>{beds}</span></div>
          <div className='flex items-center'><BiBath title='Bathrooms'/><span className='mx-1'>{baths}</span></div>
          <div className='flex items-center'><TbRulerMeasure className='rotate-180' title='Size'/><span className='mx-1'>{size} Marlas</span></div>
        </div>
        <hr className='border-gray-400 my-2' />
        <div>
        <div className="flex flex-wrap">
          {features.length>0 && features.map((index,iter)=>{
            return <Feature key={iter} feature_name={index}/>
          })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdCard