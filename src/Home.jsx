import Card from './components/Card'
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar'


const Home = () => {
  return (
    <>
      <Toaster />
      <div className='w-full h-[93vh] relative shadow-2xl black-above-img'>
        <img src="assets/img/home1.jpg" className='h-full w-full object-cover' />
        <SearchBar class_name={"Home-searchbar"} />
      </div>
      <div className='bottom-design'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='mx-[20%] my-16'>
          <div className='grid-cols-9 grid mx-auto py-10 px-6 rounded-2xl bg-gray-300'>
            <Card title={"Sell Property"} imageUrl={"assets/img/Forsale-bro.png"} target="/sell" />
            <Card title={"Buy Property"} imageUrl={"assets/img/Housesearching-cuate.png"} target="/buy" />
            <Card title={"Rent"} imageUrl={"assets/img/Apartmentrent-bro.png"} target="/rent" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home