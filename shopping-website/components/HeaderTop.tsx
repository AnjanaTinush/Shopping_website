import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex fustify-between items-center '>
            <div className='hidden lg:flex gap-1'>
                <div className="header_top_icon_warapper">
                <FaFacebook />
                </div>
                <div className="header_top_icon_warapper">
                <AiFillTwitterCircle />
                </div>
                <div className="header_top_icon_warapper">
                <FaSquareInstagram />
                </div>
                <div className="header_top_icon_warapper">
                <FaLinkedin />
                </div>
               </div>                   
            </div>
        </div>
    </div>
  )
}

export default HeaderTop