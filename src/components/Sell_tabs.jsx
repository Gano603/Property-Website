import { ImSearch } from 'react-icons/im'

export const Content_text_input = ({ title, place_title, search, pkr, value, setvalue , size}) => {
  return (
    <div className='my-4'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='border border-black bg-gray-200 rounded-lg overflow-hidden w-4/6 flex items-center px-2'>
        <ImSearch className={`text-2xl ${search ? '' : 'hidden'}`} />
        <input className='w-full outline-none bg-inherit text-lg py-3 px-4' type="text" placeholder={place_title} value={value} onChange={(e) => setvalue(e.target.value)}/>
        <span className={pkr ? 'text-red-500 text-2xl font-medium' : 'hidden'}>PKR</span><span className={size ? 'text-red-500 text-2xl font-medium' : 'hidden'}>Marlas</span>
        </div>
      <span className={size ?'px-3': 'hidden'}>{Math.floor(value / 20)} Kanals and {value%20} Marlas</span>
    </div>
  )
}

export const Content_number_input = ({ title, type, value, setvalue }) => {
  return (
    <div className='my-4'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='border border-black bg-gray-200 rounded-lg overflow-hidden w-4/6 flex items-center px-2'>
        <span className='text-red-500 text-2xl font-medium'>{type}</span>
        <input className='w-full outline-none bg-inherit text-2xl font-semibold py-3 px-4' type="number" value={value} onChange={(e) => e.target.value >=0? setvalue(e.target.value):""} />
        </div>
    </div>
  )
}

export const Content_list_input = ({ title , list , default_option , setvalue}) => {
  return (
    <div className='my-4'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <div className='border border-black bg-gray-200 rounded-lg overflow-hidden w-4/6'>
        <select className='w-full outline-none bg-inherit text-lg py-3 px-4' onChange={(e) => setvalue(e.target.value)} >
          <option disabled selected>{default_option}</option>
          {list.map((index,iter)=>{
            return <option key={iter} >{index}</option>
          })}
        </select>
      </div>
    </div>
  )
}