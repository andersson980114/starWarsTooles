import React from 'react'

const Card = (data) => {
  return (
    <div className='col-8 pt-2'>
       <div className="card-deck">
          <div className="card"> 
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <ul className="list-group">
              <li className="list-group-item list-group-item"><i className="fa fa-briefcase" ></i>   Company</li>
              <li className="list-group-item list-group-item"><i className="fa fa-user" ></i>   Role</li>
              <li className="list-group-item list-group-item"><i className="fa fa-map-marker" ></i>   Location</li>
              <li className="list-group-item list-group-item"><i className="fa fa-clock-o" ></i>   Duration</li>
              <li className="list-group-item list-group-item"><i className="fa fa-inr" ></i>   Cost</li>
              </ul> 
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Card