import React from 'react'
import bg from "../assets/bg.webp"
const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    
  };
  return ( 
    <div className='max-w-[1640px] mx-auto p-4 bg-slate-900' >
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px]  flex flex-col justify-center italic font-serif'>
              <span className='px-6 text-2xl  font-mono mb-[10px] '>welcome to </span>           
              <h1 className='px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>The <span className='text-sky-500'>Best Foods</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-sky-500'>in </span> Syria-Aleppo
            </h1>
            <span className='w-[40%] px-5 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorum
             ab veniam molestiae ipsa totam ut, tempore
             </span>
            <div className='hidden lg:flex items-center w-[150px] he-[50px] mt-[16px] bg-sky-700 rounded-full p-1 text-[14px] ml-[20px]'>
          <p className='bg-slate-900  text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>

        </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    </div>
  )
}

export default Hero