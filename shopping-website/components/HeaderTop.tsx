import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center '>
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

               <div className='text-geay-500 text-[12px]'>
                <b>FREE SHIPPING</b>THIS WEEK ORDER OVER -$100
                </div> 

                <div className='flex gap-4'>
                <select
                className='text-gray-500 text-[12px] width-[70px]'
                name='currency'
                id='currency'
                >
                <option value='USD $'>USD $</option>
                <option value='EUR '>EUR</option>
                <option value='INR'>INR</option>

                </select>

                <select
                className='text-gray-500 text-[12px] width-[80px]'
                name='language'
                id='language'
                >
                <option value='English'>English</option>
                <option value='French '>French</option>
                

                </select>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default HeaderTop