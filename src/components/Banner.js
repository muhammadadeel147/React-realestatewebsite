import React from 'react'
import Search from '../components/Search'
import Image from '../assets/img/house-banner.png'
const Banner = () => {
  return (
    <div>

<section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>

          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> Your Dream House With US.
          </h1>
          <p className='max-w-[480px] mb-8'>
          Welcome to Rent Your Dream House With US! We are your premier destination for finding the perfect rental property that fulfills your dreams and exceeds your expectations. Whether you're searching for a cozy apartment, a luxurious villa, or a spacious family home, our website offers an extensive collection of exceptional properties to choose from.

          </p>
        </div>
<div className='hidden flex-1 lg:flex justify-end items-end'>
  <img src={Image} alt=''></img>
</div>

      </div>
<Search/>
    </section>
    </div>
  )
}

export default Banner