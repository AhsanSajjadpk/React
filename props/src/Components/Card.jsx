import React from 'react'

function Card(vehicle,type) {
  return (

    <div className="card" >
      <img src="https://imgd.aeplcdn.com/1280x720/cw/ec/36254/Toyota-Sera-Exterior-137244.jpg?wm=0" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{vehicle}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">{type}</a>
      </div>
    </div>
  )
}

export default Card