import React from 'react'

export default function Main() {
  return (
    <div className='d-flex bg-img p-4'>
      <div>
        <h1>Welcome to my page, let's get connected</h1>
        <p>&lt;code&gt;I build responsive sites like this &lt;code&gt;</p>
        <a href='https://www.linkedin.com/in/patrick-emeka/'><button className='btn btn-lg btn-warning'>Contact Me</button></a>
      </div>
      <img src="images/kantee.png" className='w-25 me-5' alt="my pic" />
    </div>
  )
}
