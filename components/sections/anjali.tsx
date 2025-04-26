import Image from 'next/image'
import React from 'react'

function Anjali() {
  return (
    <section className='bg-gray-200 flex flex-col items-center justify-center p-3 md:px-7 lg:px-32 py-40'>
        <h1 className='text-3xl text-gray-700'>When I was a child, I used to fear mathematics. But now, I am in love with mathematics because of Khan Academy."</h1>
        <div className='flex items-end justify-end w-full'>
            <div>
                <h5>ANJALI</h5>
                <p className='text-gray-700'>HARYANA</p>
            </div>
            <Image 
            src={'https://cdn.kastatic.org/images/lohp/anjali-3.png'}
            alt="Anjali"
            width={180}
            height={180}
            />

        </div>
    </section>
  )
}

export default Anjali
