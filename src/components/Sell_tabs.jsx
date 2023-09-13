import { ImSearch } from 'react-icons/im'

export const Content_text_input = ({ title, place_title, search, pkr, value, setvalue , size}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='input-div'><ImSearch className={search ? '' : 'off'} /><input type="text" placeholder={place_title} value={value} onChange={(e) => setvalue(e.target.value)}/><span className={pkr ? 'input-pkr' : 'off'}>PKR</span><span className={size ? 'input-pkr' : 'off'}>Marlas</span></div>
      <span className={size ?'size-calculator': 'off'}>{Math.floor(value / 20)} Kanals and {value%20} Marlas</span>
    </div>
  )
}

export const Content_number_input = ({ title, type, value, setvalue }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='input-div'><span className='input-pkr'>{type}</span><input type="number" value={value} onChange={(e) => setvalue(e.target.value)} /></div>
    </div>
  )
}

export const Content_list_input = ({ title , list , default_option , setvalue}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='input-div'>
        <select onChange={(e) => setvalue(e.target.value)} >
          <option disabled selected>{default_option}</option>
          {list.map((index,iter)=>{
            return <option key={iter} >{index}</option>
          })}
        </select>
      </div>
    </div>
  )
}