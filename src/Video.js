import React from 'react'
import video from './vid.mp4'

const Video = () => {
    return (
        <div>
            <video width="750" height="500" controls >
      <source src={video} type="video/mp4"/>
                
Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Video
