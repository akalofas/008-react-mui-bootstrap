import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'
import {useRef} from 'react'
import { Allroutes } from '../routes/routes'
import '../styles/navbar.css'


const NavBar = () => {
    const linksRef = useRef(null);
    return (
        <Navbar className='container-fluid mx-3'>
          <Container className='d-flex justify-content-center py-3'>
            <ul className='nav nav-pills' ref={linksRef}>
              <div className="d-flex nav-item">
                  {Allroutes.map((link) => {
                      const { id, url, text } = link;
                      if (id > 0) {
                        return (
                          <li key={id}>
                            <NavLink className="nav-link" to={url}>{text}</NavLink>
                          </li>
                        );
                      }                    
                    }
                    )
                  }
                </div>
              </ul>
            </Container>
          </Navbar>
  )
}

export default NavBar
