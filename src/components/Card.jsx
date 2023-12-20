import { Link } from 'react-router-dom';

const Card = ({ title , target , imageUrl }) => {
  return (
    <div className="bg-gray-400 my-4 sm:my-0 mx-4 2xl:mx-8 rounded-2xl px-3 py-5 flex flex-col items-center col-span-3">
      <img src={imageUrl} alt={title} className='w-96 h-64'/>
      <h2 className='text-xl whitespace-nowrap md-lg:text-2xl text-gray-600 my-3 font-semibold'>{title}</h2>
      <Link className='bg-red-600 px-6 py-2  text-xl rounded-full hover:bg-red-200 hover:text-red-600 transition-colors duration-300 text-white' to={target}>Browse</Link>
    </div>
  );
};

export default Card;