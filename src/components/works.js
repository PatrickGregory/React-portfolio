import React from 'react'
import { Point } from './icon/icon'

export default function Works(props) {
  return (
    <div className='position-relative w-25'>
        <div className='bg-black'>
            <h6 className='text-white'>{props.name}</h6>
            <a href="#" className='text-warning'>VIEW PROJECT <span><Point /></span></a>
        </div>    
        <img src={props.img} alt={props.alt} className='position-absolute' />
    </div>
  )
}
