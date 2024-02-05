import React, { useState } from 'react'

import profcentre from '@/public/profCenter.svg'
import profGreen from '@/public/profGeen.svg'
import centre from '@/public/centre.svg'

import Image from 'next/image'
import Link from 'next/link'

export default function JeSuisUnCentre() {
  
  const [BgChanger, setBgChanger]=useState(false);

  
  return (
    <div className='relative -mt-8 '>
      
<div className="absolute top-96 hover:bg-lime-400 left-96 w-[273.96px] h-[71.05px] bg-white rounded-[17px] shadow text-center pt-6 text-blue-800 text-xl font-bold ">
        <Link href='/Professeur' >JE SUIS UN PROFESSEUR</Link>
      </div>
     <div className="relative top-96 hover:bg-lime-400 left-2/3 w-[273.96px] h-[71.05px] bg-white rounded-[17px] shadow text-center pt-6 text-blue-800 text-xl font-bold ">
        <Link href='/Centre'>JE SUIS UN CENTRE</Link>
      </div>
       <Image
        className=""
        src={profcentre}
        alt=""
        style={{
          width: '100%',
         
        }}
        priority
      />

      
    </div>
  )
}
