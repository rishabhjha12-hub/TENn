import React from 'react'

const Discord = () => {
    return (
        <div >
           <div style={{position:"relative",marginTop:"2rem",marginBottom:"2rem" ,marginLeft:"15rem"}}>
            <img src="./images/student.jpg" width="80%" height="70%" style={{border:"2px solid black"}}></img>
            <div style={{width:"2rem",margin:"auto" }}><h1  style={{position:"absolute",top:"8rem",right:"80rem", color:"orange",fontSize:"3.5rem",fontFamily:"cursive"}} ><b><i>WELCOME TO</i></b></h1></div>
            <div style={{width:"2rem",margin:"auto" }}><h1  style={{position:"absolute",top:"18rem",right:"40rem",color:"Yellow",fontSize:"10rem",fontFamily:"cursive" }} ><b><i>The Next Big Thing</i></b></h1></div>
             <div style={{width:"2rem",margin:"auto" }}>
            <button style={{position:"relative",bottom:"8rem",right:"10rem", color:"white",border:"2px solid black",width:"15rem",fontSize:"1.5rem",backgroundColor:"violet",borderRadius:"5rem"}} className="btn lg"><a href="https://discord.com/invite/A8zBusy" target="_blank">join Ten Vortual campus</a></button>
            </div>
           
            </div> 
        </div>
    )
}

export default Discord
