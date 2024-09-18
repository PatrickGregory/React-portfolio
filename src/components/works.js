import React from 'react'
import { Point } from './icon/icon'

export default function Works(props) {
  return (
    <div>
        <div className='bg-black'>
            <h6 className='text-white'>{props.name}</h6>
            <a href={props.link} className='text-warning text-decoration-none'>VIEW PROJECT <span><Point /></span></a>
        </div>    
        <img src={props.img} alt={props.alt} className='w-100 h-75' />
    </div>
  )
}
