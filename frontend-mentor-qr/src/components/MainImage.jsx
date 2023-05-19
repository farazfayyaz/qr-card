import React from 'react'
import QRimage from '../assets/topimage.png'

export const MainImage = () => {
  return (
    <div className='MainImage'>
        <img src={QRimage} className='MainImage-QR' />
    </div>
  )
}
