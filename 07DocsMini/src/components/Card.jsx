import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      {/* // make cards */}

    <FaRegFileAlt/> 
    <p className='font-semibold leading-right mt-5'>{data.desc}</p>
    <div className='footer absolute bottom-0 bg-sky-900 w-full left-0'>

        <div className='flex items-center justify-between py-3 px-8 mb-5'>
            <h5>{data.filesize}</h5>
            <button className='w-7 h-7 bg-sky-500 rounded-full flex items-center justify-center'>
                {data.close ? <IoClose/> : <MdOutlineFileDownload size={'1em'}/>}
                
            </button>
            
        </div>

        </div>
    </motion.div>
  )
}

export default Card
