import Modal from 'react-modal'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenn, setModalIsOpenn] = useState(false);


  const toggleOpen = () => setDropdown(!dropdown);

  return (
    <div>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">

            <img src="./images/download.jfif" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/online courses">Online courses</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/We are hiring">We are hiring</NavLink>
                </li>
                <div className="dropdown">
                  <button className="btn btn-primary mx-2" onClick={toggleOpen}>
                    More
                  </button>
                  <div
                    className={`dropdown-menu ${dropdown ? 'show' : ''}`}
                    aria-labelledby="dropdownMenuButton"
                  >
                    <NavLink className="dropdown-item" to="/Contactt">
                      contact us
                    </NavLink>
                    <NavLink className="dropdown-item" to="/Testi">
                      testimonial
                    </NavLink>
                    <NavLink className="dropdown-item" to="/Complaints">
                      Complaints
                    </NavLink>
                    <NavLink className="dropdown-item" to="/Text">
                      Our TextUtils
                    </NavLink>
                  </div>
                </div>
                <button className="mx-4 btn btn-primary" onClick={() => setModalIsOpen(true)} signup>signup</button>
                <button className="mx-4 btn btn-primary" onClick={() => setModalIsOpenn(true)} signup>login</button>





              </ul>


            </div>

          </div>
         
         <Modal className="modd" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}>
            <h2 className="my-8">signup</h2>
            <div className="mb-3 ">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">password</label>
              <input  type="password" className="form-control" id="exampleFormControlInput1" />
            </div>
            <button className="btn btn-success my-2">signup</button>
            
            <div>
              <button className="btn btn-primary my-2 close" onClick={() => setModalIsOpen(false)}>Close</button>
            </div> 

          </Modal>
          <Modal className="modd" isOpen={modalIsOpenn} shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpenn(false)}>
            <h2 className="my-8">Login</h2>
            <div className="mb-3 ">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3 ">
              <label for="exampleFormControlTextarea1" className="form-label">password</label>
              <input  type="password" className="form-control" id="exampleFormControlInput1" />
            </div>
            <button className="btn btn-success my-2">Login</button>
            <div>
              <button className="btn btn-primary my-2 close" onClick={() => setModalIsOpenn(false)}>Close</button>
            </div> 

          </Modal>
            
            
         
         
  

        





        </nav>

      </section>




    </div>

  )
}

export default Navbar
