import './styles/Sell.scss'
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
    // axios.post(api_Url+"/ad/newad").then((res)=> console.log(res))
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
          },{timeout: 60000}).then((res)=> console.log(res)).catch((err) => console.log("Error:", err))
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
      <div className='title-poster'>
        <div>
          <h1>Upload your Property Details</h1>
          <p>Get the best value for your property in a few steps.</p>
        </div>
        <div>
          <img src="/src/assets/img/For sale-bro.png" alt="For Sale Logo" />
        </div>
      </div>
      <div className='content-box' >
        <div>
          <div className='first-col'>
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
          <div className='second-col'>
            <div className='personal-content-box'>
              <h2>Personal Details</h2>
              <Content_text_input title={"What is your name?"} place_title={"Enter your Name"} value={name} setvalue={setname} />
              <Content_text_input title={"What is your email?"} place_title={"Enter your email"} value={email} setvalue={setemail} />
              <Content_text_input title={"Contact Number"} place_title={"Enter your Contact Number"} value={contact} setvalue={setcontact} />
            </div>
            <div className='feature-selection'>
              <h2>Features</h2>
              <p>Select features that you are offering with your property.</p>
              <CheckboxList options={propertyFeatures} value={selectedfeatures} setvalue={setselectedfeatures} />
            </div>
          </div>
        </div>
        <div><button onClick={submitHandler} className='publish-button'>PUBLISH</button></div>
      </div>
    </div>
  )
}

export default Sell