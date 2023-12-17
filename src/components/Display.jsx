import { Link } from "react-router-dom"
import '../styles/Display.scss'
import DisplayCard from "./DisplayCard"
import {FaFilter} from 'react-icons/fa'

export const Option_button = ({title , click_action}) => {
return(
  <button className="flex items-center border border-black rounded-lg py-2 px-4 bg-gray-200 hover:bg-gray-400" onClick={click_action} >{title}</button>
)
}


// const Display = ({type , location}) => {
//   return (
//     <div className='display'>
//         <h1>Properties for {type} in {location}</h1>
//         <div>
//           <Option_button title={"Residential Properties"} />
//           <Option_button title={"Commercial Properties"} />
//           <Option_button title={"Plot"} />
//         </div>
//         <div className='card-display'>
//             <button className='slider-button'>&lt;</button>
//             <DisplayCard imgUrl={"src/assets/img/shutterstock_407554567.jpg"} Price={"200 Crore"} Location={"Apna Ghar"}/>
//             <DisplayCard imgUrl={"src/assets/img/shutterstock_407554567.jpg"} Price={"200 Crore"} Location={"Apna Ghar"}/>
//             <DisplayCard imgUrl={"src/assets/img/shutterstock_407554567.jpg"} Price={"200 Crore"} Location={"Apna Ghar"}/>
//             <button className='slider-button'>&gt;</button>
//         </div>
//         <Link to={"#"}>View All </Link><span>&gt;</span>
//     </div>
//   )
// }

// export default Display