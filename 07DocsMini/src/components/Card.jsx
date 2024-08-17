import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      {/* // make cards */}

    <FaRegFileAlt/> 
    <p className='font-semibold leading-right mt-5'> dummy text bolna aunty au kya ghanti mai bajau kya </p>
    <div className='footer absolute bottom-0 bg-sky-900 w-full left-0'>

        <div className='flex items-center justify-between py-3 px-8 mb-5'>
            <h5> .4mb</h5>
            <span className='w-7 h-7 bg-sky-500 rounded-full flex items-center justify-center'>
                <MdOutlineFileDownload size={'1em'}/>
            </span>
            
        </div>

        </div>
    </div>
  )
}

export default Card
