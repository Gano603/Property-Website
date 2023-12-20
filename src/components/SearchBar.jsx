import { useState } from 'react'
import toast from 'react-hot-toast';
import {ImSearch} from 'react-icons/im'
import {BiErrorAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
// import '../styles/SearchBar.scss'

const SearchBar = ({address , class_name}) => {

    const [searchValue , setsearchValue] = useState("");
    const nav = useNavigate();
    
    const submitHandler = () => {
      if(!searchValue){
        toast(<span className='toast-notification'>
          <BiErrorAlt /> City Field Cannot be Empty
        </span>,{
          duration:4000,
          position:'top-right',
        })
        return;
      }
      const pascalCaseValue = searchValue
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  
    setsearchValue(pascalCaseValue);
        nav(`/display/${pascalCaseValue}`);
    }

  return (
    <div className={`${class_name === "Display-searchbar" ? "top-[40%]":"top-[50%]"} absolute flex items-center left-[50%] -translate-x-[50%] w-[17rem] xs:w-[25rem] sm:w-[30rem] lg:w-[40rem] bg-gray-600 py-4 sm:py-6 px-2 sm:px-4 rounded-full`}>
      <input 
      className='mx-4 h-12 outline-none w-full font-semibold text-gray-500 px-4 rounded-full'
      type="text" placeholder='Search by City' onKeyDown={(e)=>{if(e.key === 'Enter') submitHandler()}} onChange={(e)=> setsearchValue(e.target.value)}/>
      <div className='bg-white p-2 rounded-full cursor-pointer mr-5' onClick={submitHandler}>
      <ImSearch className='text-xl' />
      </div>
    </div>
  )
}

export default SearchBar