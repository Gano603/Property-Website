import axios from "axios"
import { motion } from "framer-motion"

const Profile_Menu = ({ setprofMenuisOpen,setisLogin}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      className='absolute top-14 lg:top-1 right-14 lg:right-10 bg-white px-5 py-1'>
      <button>Profile</button>
      <hr />
      <button onClick={() => {
        axios.get(import.meta.env.VITE_API_URL+"/user/logout",
        {withCredentials:true})
        .then((res)=> {
          if(res.data.success) setisLogin(false)
        })
        setprofMenuisOpen(false)
      }}>Sign Out</button>
    </motion.div>
  )
}

export default Profile_Menu