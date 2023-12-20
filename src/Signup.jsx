import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiErrorAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = ({ api_Url, setisLogin }) => {

  const nav = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [register, setregister] = useState(false);

  const submitHandler = async () => {
    if (password !== cpassword && register) {
      console.log("Not Match")
      toast(<span className='toast-notification'>
        <BiErrorAlt /> Passwords do not Match
      </span>, {
        duration: 4000,
        position: 'top-right',
      })
    }
    else if (register) {
      await axios.post(api_Url+"/user/newuser", {
        name, email, password, contact
      },{withCredentials:true}).then((res) => console.log(res)).then((res) => {
        if (res.data.success) {
          setisLogin(true)
          nav('/')
        }
        else {
          console.log("User Already Exists")
        }
      })
    }
    else if (!register) {
      await axios.post(api_Url+"/user/login", {
        email, password
      },{withCredentials:true}).then(() => {
        setisLogin(true)
        nav('/')
      })
    }
  }


  return (
    <div className='flex flex-col justify-center items-center my-32'>

      <div className="border border-black rounded-xl p-4 flex flex-col items-center w-[20rem] xs:w-[24rem] sm:w-[32rem]">
        <Toaster />
        <div className="bg-gray-600 rounded-full w-max px-4 py-3">
          <FontAwesomeIcon icon={faUser} className='text-3xl' />
        </div>
        <div className="flex flex-col items-center px-6 py-4 my-4">
          <h1 className="text-4xl font-bold">Join <span className='text-red-600'>Estate</span>.com</h1>
          <p className="text-xl my-2">Invest in Future</p>
          <form className='my-3 w-fit'>
            {register && <input
              className="my-2 h-16 outline-none border px-3 rounded-lg w-full"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              type="text"
              required
            />}
            <input
              className="my-2 h-16 outline-none border px-3 rounded-lg w-full"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              required
            />
            {register && <input
              className="my-2 h-16 outline-none border px-3 rounded-lg w-full"
              placeholder="0333-1234567"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              type="tel"
              pattern="^\03-\d{2}-\d{7}$"
              required
            />}
            <input
              className="my-2 h-16 outline-none border px-3 rounded-lg w-full"
              placeholder="Enter your Password"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            {register && <input
              className="my-2 h-16 outline-none border px-3 rounded-lg w-full"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setcpassword(e.target.value)}
              type="password"
              required
            />}

            <p className='px-4'>{register ? "Already" : "Not"} registered? <span className='cursor-pointer text-blue-800 underline' onClick={() => setregister(!register)}>{register ? "Login" : "Register"}</span> now</p>

          </form>
          <button className="mt-4 bg-red-600 px-6 py-2 border border-black rounded-full text-white font-semibold text-lg hover:bg-red-500" onClick={submitHandler}>{register ? "Register" : "Login"}</button>
        </div>
      </div>

    </div>
  )
}

export default Signin