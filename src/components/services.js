import React from 'react'

export default function Service(props) {
  return (
    <div className='text-white p-3' style={{background:'#2c2c38'}}>
      <h5>{props.heading}</h5>
      <p>{props.paragraph}</p>
    </div>
  )
}
