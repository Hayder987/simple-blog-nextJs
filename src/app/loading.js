import React from 'react'
import { PulseLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className='flex justify-center items-center my-10'>
        <PulseLoader color="#18f1b0" />
    </div>
  )
}

export default loading