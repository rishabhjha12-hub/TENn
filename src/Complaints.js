import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import './index.css'

const Complaints = () => {
    return (
        <div>
            <Navbar />
            <div className="containern">
                <h1>Complaints</h1>
                <span> 

                    For any complaints regarding The Entrepreneurship Network(TEN)  please contact at our email address:
                    hr.contact.ten@gmail.com

                
                </span>
                
                <img src="./images/complaints.jpg" alt="" />
                
            </div>


            <Footer />
        </div>
    )
}

export default Complaints
