import React from 'react'

const progress = () => {
    return (
        <div>
            <div className="progress">
  <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: 10%+'em'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: 25%+'em'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: 50%+'em'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: 75%+'em'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div className="progress">
  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: 100+'em'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
        </div>
    )
}

export default progress

