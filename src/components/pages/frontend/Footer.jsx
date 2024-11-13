import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className='py-5 bg-[#F4F1EA]'>
    <div className='container'>
      <div  className='flex justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <h6>CONNECT</h6>
          <ul className='flex justify-center gap-5'>
            <li>
              <a href="" className='size-9 rounded-full bg-[#635C52] grid place-content-center'><Facebook stroke={'#fff'} size={15}/></a>
            </li>
            <li>
              <a href="" className='size-9 rounded-full bg-[#635C52] grid place-content-center'><Twitter stroke={'#fff'} size={15}/></a>
            </li>
            <li>
              <a href="" className='size-9 rounded-full bg-[#635C52] grid place-content-center'><Instagram stroke={'#fff'} size={15}/></a>
            </li> 
          </ul>
        </div>

        <p className='text-center font-bold'>© 2024 Leo Book Store.</p>
 
      </div>
    </div>

   
  </footer>
  )
}

export default Footer