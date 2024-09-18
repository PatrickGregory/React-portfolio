import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Check, Close, Linkedin, Twitter, Whatsapp } from '../icon/icon';
import { GitHub } from '@mui/icons-material';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='rounded h-100' style={{ backgroundColor: '#2c2c38' }}>
      <Button style={{ backgroundColor: '#2c2c38' }} className="d-lg-none d-md-none" onClick={handleShow}>
        <Close />
      </Button>

      {/* <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert> */}

      <Offcanvas show={show} onHide={handleClose} responsive="lg md">
        <Offcanvas.Header style={{ backgroundColor: '#2c2c38' }} closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: '#2c2c38' }}>
          <div className='rounded'>
            <Nav>
              <div className='opacity-75'>
                <img className='rounded-pill w-50' id='opaque' src="./images/kantee.png" alt="The dev" />
                <h4 className='text-warning' id='opaque'>Patrick Gregory</h4>
                <p className='text-white' id='opaque'>Full-Stack Developer</p>
              </div>
              <NavItem>
                <div className='d-flex gap-3 text-white'>
                  <p>Location:</p>
                  <p> Lagos, Nigeria</p>
                </div>
              </NavItem>
              <NavItem className='pt-3 w-100'>
                <p className='text-warning'><Check /><span className='text-white ms-3'>React.js</span></p>
                <p className='text-warning'><Check /><span className='text-white ms-3'>JavaScript</span></p>
                <p className='text-warning'><Check /><span className='text-white ms-3'>BootStrap</span></p>
                <p className='text-warning'><Check /><span className='text-white ms-3'>Express.js</span></p>
                <p className='text-warning'><Check /><span className='text-white ms-3'>Node.js</span></p>
                <p className='text-warning'><Check /><span className='text-white ms-3'>SQL</span></p>
                <p className='text-warning'><Check /><span className='text-white ms-3'>MongoDB</span></p>
              </NavItem>
              <div>
                <NavItem className='d-flex gap-5 pt-2 pb-4'>
                  <Link to={'https://www.linkedin.com/in/patrick-emeka/'} target='_blank'><Linkedin /></Link>
                  <Link to={'https://x.com/kanteeDaDev'} target='_blank'><Twitter /></Link>
                  <Link to={'https://github.com/PatrickGregory'} className='text-warning' target='_blank'><GitHub /></Link>
                  <Link to={'https://wa.me/2348115112841'} target='_blank'><Whatsapp /></Link>
                </NavItem>
              </div>
            </Nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
