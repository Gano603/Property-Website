import AdDisplay from '../Buy'
import Sell from '../Sell.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import Menu_display from './Menu_display'
import axios from 'axios'
import Profile_Menu from './Profile_Menu'

const Navbar = ({ api_Url, isLogin, setisLogin, profMenuisOpen, setprofMenuisOpen }) => {

  const nav = useNavigate();
  const [MenuisOpen, setMenuisOpen] = useState(false);

  useEffect(() => {
    axios.get(api_Url + "/user/getuser")
      .then((response) => {
        if (response.data.success) setisLogin(true)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  return (
    <>
      <div className='h-24 flex items-center px-16 border border-b-black border-opacity-50'>
        <div className='flex items-center cursor-pointer' onClick={() => nav('/')}>
          <img src="public/assets/img/ideogram.jpeg" className='h-16 w-16 rounded-md' alt="logo" />
          <h2 className='mx-2 text-2xl font-semibold'><span className='text-[#ff0000]'>Estate</span>.com</h2>
        </div>
        <div className='w-full mx-20'>
          <div>
            <Link className='mx-4 text-xl text-gray-500 font-semibold' to={"/display/all"} element={<AdDisplay />}>BUY</Link>
            <Link className='mx-4 text-xl text-gray-500 font-semibold' to={"/sell"} element={<Sell />}>SELL</Link>
            <Link className='mx-4 text-xl text-gray-500 font-semibold' to={"/display/all"} element={<AdDisplay />}>RENT</Link>
          </div>
        </div>
        <div>
          {!isLogin && <button className='bg-gray-300 py-3 px-5 inline-block whitespace-nowrap rounded-3xl font-semibold hover:bg-gray-200 transition-colors duration-300' onClick={() => nav('/signin')}>SIGN IN</button>}
          {isLogin && <CgProfile onClick={() => setprofMenuisOpen(!profMenuisOpen)} />}
          <AiOutlineMenu onClick={() => setMenuisOpen(!MenuisOpen)} className='hidden' />
        </div>
      </div>
      {MenuisOpen && <Menu_display />}
      {profMenuisOpen && <Profile_Menu setisLogin={setisLogin} />}
    </>
  )
}

export default Navbar