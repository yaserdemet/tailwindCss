import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full h-[80vh] bg-white'>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2' >
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="laptop"/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>React Router Dom</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Global State Management</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia consectetur expedita, nesciunt a doloribus in ipsam doloremque sed, impedit numquam laboriosam reiciendis qui magni molestiae veniam exercitationem quae incidunt!</p>
                <button className='text-[#00df9a] md:mx-0 w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black hover:text-black ease-in-out duration-700 hover:bg-[#00df9a]'>Get Started</button>
            </div>



        </div>



    </div>
  )
}

export default Analytics