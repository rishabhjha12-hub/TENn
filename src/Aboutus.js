import React from 'react'
import { Link } from 'react-router-dom'

const Aboutus = () => {

    return (


        <div className="box">

            <h1 className="h-primary text-center">About US</h1>





            <div class="container">
                <div class="row">
                    <p className="text-left col">learning together from the comfort of your home</p>
                    <img src="./images/teen.webp" alt="sorry" className="col" />

                </div>
                <div>
                    <Link to="/About" className="btn btn-primary">leatn more</Link>
                </div>


            </div>



        </div>
    )
}

export default Aboutus
