import { Link } from "react-router-dom"
import AdDisplay from "../Buy"
import Sell from "../Sell"
import { motion } from "framer-motion"


const Menu_display = ({setMenuisOpen,setprofMenuisOpen,isLogin}) => {
  return (
    <motion.div 
    initial={{scaleY:0}}
    animate={{scaleY:1}}
    exit={{scaleY:0}}
    className="flex lg:hidden justify-between px-12 absolute top-0 left-0 bg-white w-full">
        <Link onClick={()=> setMenuisOpen((prev)=> !prev)} className="font-semibold py-3 px-4" to={"/display/all"} element={<AdDisplay />}>BUY</Link>
        <Link onClick={()=> setMenuisOpen((prev)=> !prev)} className="font-semibold py-3 px-4" to={"/sell"} element={<Sell />}>SELL</Link>
        <Link onClick={()=> setMenuisOpen((prev)=> !prev)} className="font-semibold py-3 px-4" to={"/display/all"} element={<AdDisplay />}>RENT</Link>
        {isLogin && <Link onClick={()=> setprofMenuisOpen((prev)=> !prev)} className="font-semibold py-3 px-4" to={"#"}>PROFILE</Link>}
        {!isLogin && <Link onClick={()=> setMenuisOpen((prev)=> !prev)} className="font-semibold py-3 px-4" to={"/signin"}>SIGN IN</Link>}
    </motion.div>
  )
}

export default Menu_display