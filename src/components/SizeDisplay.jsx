import { motion } from "framer-motion"


const SizeDisplay = ({size}) => {
  return (
    <motion.div 
    initial={{scale:0}}
    animate={{scale:1}}
    className='bg-gray-900 absolute top-0 right-0 flex flex-col px-6 py-6 items-end w-max'>
        <p className='text-white text-lg'>{`${Math.floor(size/20)} Kanals and ${size%20} Marlas`}</p>
        <p className='text-white text-lg'>{size*272.251} ft²</p>
    </motion.div>
  )
}

export default SizeDisplay