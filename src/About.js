import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="conta">
                <h2>ABOUT US</h2>
                <h1>Quality Teaching <br />
                    Any Time, Everywhere</h1>



                <p>The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.
                    Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.
                    This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
                    With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.</p>
            </div>
            <Footer/>

        </div>
        
    )
}

export default About
