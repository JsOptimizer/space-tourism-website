import { destionationDetailslist } from '@/constant'
import React from 'react'

const DestionationDetails = () => {
  return (
    <section className='flex flex-col justify-between'>
        <ul className='flex gap-8'>
            {
                destionationDetailslist.map((label,idx)=>(
                    <li className={`py-4 cursor-pointer hover:border-b-2`} key={idx}>{label}</li>
                ))
            }
        </ul>
        <p></p>
        <p></p>
        <hr />
        <section>
            <div>
                <p></p>
                <p></p>
            </div>
            <div>
                <p></p>
                <p></p>
            </div>
        </section>
    </section>
  )
}

export default DestionationDetails