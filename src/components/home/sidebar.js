import { Sidebar, Nav, NavItem, } from "@asphalt-react/sidebar"
import { Check, Github, Linkedin, Twitter, Whatsapp } from "../icon/icon";

function Sidebarto () {

  return (
    <div className="mb2 fixed-start">
      <Sidebar>
      <div style={{backgroundColor:'#2F3645',padding:'2rem',color:'#fff'}}>
      <Nav>
              <NavItem>
                  <img src='images/kantee.png' className='w-75 rounded-pill ms-4' alt='profile'/>
              </NavItem>
              <NavItem>
                  <h6 className="pt-1" style={{color:'orangered'}}>Patrick Emeka</h6>
              </NavItem>
              <NavItem>
                  <p>Fullstack Developer</p>
              </NavItem>
              <NavItem>
                <hr/>
              <div className='d-flex p-2 text-white bg-opacity-50'>
                  <h6>Location:</h6>
                  <p className='ms-auto'> Nigeria</p>
              </div>
              <hr/>
              </NavItem>
              <NavItem>
                  <div className='d-flex gap-2'>
                      <div className='text-warning'><Check /></div>
                      <p className="fs-6">HTML, CSS, JavaScript</p>
                  </div>
                  <div className="d-flex gap-2">
                    <div className='text-warning'><Check /></div>
                    <p className="fs-6">HTML, CSS, JavaScript</p>
                  </div>
                  <div className="d-flex gap-2">
                    <div className='text-warning'><Check /></div>
                    <p className="fs-6">HTML, CSS, JavaScript</p>
                  </div>
                  <div className="d-flex gap-2">
                    <div className='text-warning'><Check /></div>
                    <p className="fs-6">HTML, CSS, JavaScript</p>
                  </div>
              </NavItem>
            </Nav>
      </div>
      <div className="w-100 bg-secondary py-2 ps-5">
            <a href="https://www.linkedin.com/in/patrick-emeka/" className="px-2"><Linkedin /></a>
            <a href="https://github.com/PatrickGregory" className="px-2"><Github /></a>
            <a href="https://x.com/kanteeDaDev" className="px-2"><Twitter /></a>
            <a href="https://wa.me/2348115112841" className="px-2"><Whatsapp /></a>
      </div>
      </Sidebar>
    </div>
  );
}

export default Sidebarto;
