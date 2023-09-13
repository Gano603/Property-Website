import '../styles/Navbar.scss'
import AdDisplay from '../Buy'
import Sell from '../Sell.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import Menu_display from './Menu_display'
import axios from 'axios'
import Profile_Menu from './Profile_Menu'

const Navbar = ({api_Url , isLogin , setisLogin , profMenuisOpen , setprofMenuisOpen}) => {

  const nav = useNavigate();
  const [MenuisOpen, setMenuisOpen] = useState(false);

  useEffect(() => {
    axios.get(api_Url + "/user/getuser")
      .then((response) => {
        if(response.data.success) setisLogin(true)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  

  return (
    <>
      <div className='navbar'>
        <div className='title-box' onClick={() => nav('/')}>
          <img src="./assets/img/ideogram.jpeg" alt="logo" />
          <h2><span className='text-red'>Estate</span>.com</h2>
        </div>
        <div className='menu_nav'>
          <div className='responsive-off-700px'>
            <Link to={"/display/all"} element={<AdDisplay />}>BUY</Link>
            <Link to={"/sell"} element={<Sell />}>SELL</Link>
            <Link to={"/display/all"} element={<AdDisplay />}>RENT</Link>
          </div>
        </div>
        <div>
          {!isLogin && <button className='responsive-off-700px' onClick={() => nav('/signin')}>SIGN IN</button>}
          {isLogin && <CgProfile onClick={()=> setprofMenuisOpen(!profMenuisOpen)}/>}
          <AiOutlineMenu onClick={()=> setMenuisOpen(!MenuisOpen)} className='menu-icon responsive-on-700px' />
        </div>
      </div>
      {MenuisOpen && <Menu_display />}
      {profMenuisOpen && <Profile_Menu setisLogin={setisLogin}/>}
    </>
  )
}

export default Navbar