import React from 'react'


const Testimonial = () => {
  return (
  
    <div className="cont">
        
      <h1 className="just">Testimonial</h1>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/tennn.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption ">

              <p>I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.

                Thank you team TEN!



                -Kshema Unni, Business Development Intern</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/tennn.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption ">

              <p>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!

                -Aakriti Malik, DM Intern</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/tennn.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption ">

              <p>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.





                -Anjali Srivastava, Content Intern

              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    </div>
  )
}

export default Testimonial
