import { Link } from "react-router-dom"
import AdDisplay from "../Buy"
import Sell from "../Sell"


const Menu_display = () => {
  return (
    <div className="vert-menu">
        <Link to={"/display/all"} element={<AdDisplay />}>BUY</Link>
        <Link to={"/sell"} element={<Sell />}>SELL</Link>
        <Link to={"/display/all"} element={<AdDisplay />}>RENT</Link>
    </div>
  )
}

export default Menu_display