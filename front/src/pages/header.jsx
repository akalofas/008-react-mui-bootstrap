import React from 'react'
import viteLogo from '../assets/vite.svg'
import '../styles/header.css'


const PageHeader = () => {
    return (
        <header className="container-fluid">
          <div className="d-flex flex-wrap justify-content-center border-bottom">
            <div className='ml-4 '>
              <a href="/" 
              className='d-flex align-items-center  mb-1 mb-md-0 link-body-emphasis text-decoration-none'>
                <img src={viteLogo} className="bi me-2" width="40" height="32" />
              </a>             
            </div>
            <div className="ms-auto"></div>
            <div className="vr" />
            <div className="col-md-3 text-end">
              <button type="button" className="btn btn-outline-primary mt-1 mb-1 me-2">Login</button>
            </div>
        </div>
      </header>
      )
    }

export default PageHeader
