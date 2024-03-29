import { Suspense, useState, lazy, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('./Home'))
const Navbar = lazy(() => import('./components/Navbar'))
const AdDisplay = lazy(() => import('./Buy'))
const Sell = lazy(() => import('./Sell'))
const Footer = lazy(() => import('./components/Footer'))
const Signin = lazy(() => import('./Signup'))
import './styles.css'
import axios from 'axios'

const api_url = import.meta.env.VITE_API_URL;
// const api_url = "http://localhost:5000";

function App() {
  const [isLogin, setisLogin] = useState(false);
  const [profMenuisOpen, setprofMenuisOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api_url}/user/getuser`, {
          withCredentials: true,
        });
        if (response.data.success) {
          setisLogin(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();

  }, []);


  return (
    <BrowserRouter>
      <Navbar api_Url={api_url} isLogin={isLogin} setisLogin={setisLogin} profMenuisOpen={profMenuisOpen} setprofMenuisOpen={setprofMenuisOpen} />
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/display/:location"} element={<AdDisplay api_Url={api_url} />} />
          <Route path={"/sell"} element={<Sell api_Url={api_url} />} />
          <Route path={"/signin"} element={<Signin api_Url={api_url} setisLogin={setisLogin} />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App
