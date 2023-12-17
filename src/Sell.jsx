// import { HiOutlineClipboardCopy } from 'react-icons/hi'
import CheckboxList from './components/Checkbox'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ImageHandler from './components/ImageHandler'
import { Content_list_input, Content_number_input, Content_text_input } from './components/Sell_tabs'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// const Drag_feature = ({setdrag}) => {
//   return(
//     <div className='Drag-feature' onDragLeave={()=>setdrag(false)}>
//       <h2>Drop your Images</h2>
//     </div>
//   )
// }

const Error = () => {
  return(
    toast(<span className='toast-notification'>
      <BiErrorAlt /> Network Error! Try Again
    </span>,{
      duration:4000,
      position:'top-right',
    })
  )
}



const Sell = ({ api_Url }) => {

  const propertyFeatures = [
    'Garage',
    'Lawn/Yard',
    'Gas Supply',
    'Water Supply',
    'Electricity',
    'Kitchen Appliances',
    'Security System',
    'Swimming Pool',
    'Basement',
    'Solar Panels',
    'Smart Home Technology',
  ];
  const propertyTypes = [
    'Apartment',
    'House',
    'Portion',
    'Plot',
    'Plaza',
    'Shop',
    'Farm House',
  ];
  const serviceTypes = [
    "Sale",
    "Rental"
  ]

  const nav = useNavigate();

  const [files, setfiles] = useState([]);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [type, settype] = useState("");
  const [service, setservice] = useState("");
  const [beds, setbeds] = useState("");
  const [baths, setbaths] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [size, setsize] = useState("");
  const [selectedfeatures, setselectedfeatures] = useState([]);


  const submitHandler = () => {
    const promises = files.map((index) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        //creates a new filereader and then uses the reader.readasdataURL, onload it will execute the following function
        reader.onload = () => {
          const base64ImageData = reader.result;
          resolve(base64ImageData);
        };
        reader.readAsDataURL(index);
      });
    });
    Promise.all(promises)
      .then(async(resolved_data) => {
        await axios.post(api_Url + "/ad/newad", {
            name, email, contact, beds, baths, size, features: selectedfeatures, price:price.toLocaleString(), address, city, type, dfiles: resolved_data, description, service_type:service,
          },{timeout: 60000}).then(()=> nav("/")).catch((err) => console.log("Error:", err))
        })
  };

  // res.data.success? nav("/"):<Error />

  const loader = () => {
    axios.get(api_Url+"/user/getuser")
    .then(({data})=>{
      if(data.success){
        setname(data.details.name)
        setemail(data.details.email)
        setcontact(data.details.contact)
      }
    })
  }

  useEffect(()=> {
    loader()
  },[])

  return (
    <div>
      <Toaster />
      <div className='flex mx-28 px-10 justify-between bg-[#ec7373] py-5 rounded-2xl my-8 border-black border'>
        <div className='my-3'>
          <h1 className='text-4xl my-4 text-white font-semibold'>Upload your Property Details</h1>
          <p className='text-xl text-white font-semibold'>Get the best value for your property in a few steps.</p>
        </div>
        <div>
          <img className='h-72 w-64' src="public/assets/img/For sale-bro.png" alt="For Sale Logo" />
        </div>
      </div>
      <div className='mx-28 p-4 border rounded-2xl border-black'>
        <div className='flex justify-between'>
          <div className='w-5/12 pl-10'>
            <Content_list_input title={"What kind of property do you have?"} list={propertyTypes} setvalue={settype} default_option={"Select your Property Type"}/>
            <Content_list_input title={"What do you want to do with your property?"} list={serviceTypes} setvalue={setservice} default_option={"Select your Choice"}/>
            <Content_text_input title={"Which city is your property in?"} place_title={"Select your city"} search={true} value={city} setvalue={setcity} />
            <Content_text_input title={"Where is your property?"} place_title={"Enter your address"} value={address} setvalue={setaddress} />
            <Content_text_input title={"What is the size of your property?"} place_title={"Enter size of your property"} value={size} setvalue={setsize} size={true}/>
            <Content_text_input title={"What is the asking price?"} place_title={"0"} pkr={true} value={price} setvalue={setprice} />
            <Content_text_input title={"How would you describe your property?"} place_title={"Describe your Property"} value={description} setvalue={setdescription} />
            <Content_number_input title={"How many Bedrooms?"} type={"Beds"} value={beds} setvalue={setbeds} />
            <Content_number_input title={"How many Baths?"} type={"Baths"} value={baths} setvalue={setbaths} />
            <ImageHandler files={files} setfiles={setfiles} />
          </div>
          <div className='w-5/12'>
            <div className=''>
              <h2 className='text-2xl font-semibold'>Personal Details</h2>
              <Content_text_input title={"What is your name?"} place_title={"Enter your Name"} value={name} setvalue={setname} />
              <Content_text_input title={"What is your email?"} place_title={"Enter your email"} value={email} setvalue={setemail} />
              <Content_text_input title={"Contact Number"} place_title={"Enter your Contact Number"} value={contact} setvalue={setcontact} />
            </div>
            <hr className='my-4 border-gray-600'/>
            <div className='border border-black rounded-xl p-6'>
              <h2 className='text-lg font-medium'>Features</h2>
              <p>Select features that you are offering with your property.</p>
              <CheckboxList options={propertyFeatures} value={selectedfeatures} setvalue={setselectedfeatures} />
            </div>
          </div>
        </div>
        <div className='flex justify-end'><button onClick={submitHandler} className='border-black border-2 bg-red-500 text-2xl font-semibold px-5 hover:bg-red-300 transition-colors duration-300 py-2 rounded-xl'>PUBLISH</button></div>
      </div>
    </div>
  )
}

export default Sell