import SearchBar from './components/SearchBar'
import {Option_button} from './components/Display'
import AdCard from './components/AdCard'
import './styles/Buy.scss'
import { useParams } from 'react-router-dom'
import { FaFilter } from 'react-icons/fa'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Addisplay from './components/Addisplay'

const AdDisplay = ({api_Url}) => {

  const {location} = useParams();
  const [isLoaded,setisLoaded] = useState();
  const [ads,setads] = useState([]);
  const [visibleads,setvisibleads] = useState(10);
  const [displayMenu,setdisplayMenu] = useState(false);
  const [displayAd,setdisplayAd] = useState();
  
  const loader = () => {
    if(location === "all") {
      axios.get(api_Url+"/ad/getallads")
      .then(({data:{details}})=> setads(details)).then(()=> setisLoaded(true)).catch((err)=> console.log(err))
    }
    else {
      axios.post(api_Url+"/ad/getadbycity",{
        city:location
      })
      .then(({data:{details}})=>{
        setads(details)
      }).then(()=> setisLoaded(true)).catch((err)=> console.log(err))
    }
  }

 useEffect(()=>{
  loader();
  setisLoaded(false)
 },[])

  return (
    <>
    {displayMenu && <Addisplay index={ads[displayAd]} setdisplayMenu={setdisplayMenu}/>}
      <SearchBar address={location} class_name={"Display-searchbar"}/>
      <div className="top-poster"></div>
      <div className='display'>
      <h1>Properties for Sale in {location}</h1>
      <div className='responsive-on-700px filter-button'>
          <button className="option-button"><FaFilter /><span>Filters</span></button>
        </div>
      <div className='responsive-off-700px'>
      <Option_button title={"Purchase"} />
      <Option_button title={"Rental"}/>
      </div>
      <hr />
      {!isLoaded && <div className="loader"></div>}
      {ads.length>0 && ads.slice(0,visibleads).map((index,iter)=>{
        return <AdCard key={index._id} iter={iter} setdisplayAd={setdisplayAd} setdisplayMenu={setdisplayMenu} features={index.features} imageUrl={index.imageData[0]} type={index.type} price={index.price} beds={index.beds} baths={index.baths} size={index.size} address={index.address}/>
      })}
      </div>
      <div className='loadmore_option'>
      <Option_button title={"Load More"} click_action={()=> setvisibleads(visibleads+10)}/>
      </div>
    </>
  )
}

export default AdDisplay