import React from 'react'

function Card(info) {
  console.log(info.color);
  
  return (
    <div className={`border-2 border-${info.color}-500`}>
        <img src={info.object.img} alt="" />
        <h1>{info.object.name}</h1>
        <div>{info.data}</div>
    </div>
  )
}

export default Card