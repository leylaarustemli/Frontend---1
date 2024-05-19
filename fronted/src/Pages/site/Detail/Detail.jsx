import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./Detail.css"
const Detail = () => {
  const [detail,setDetail]=useState([])
  const{id}=useParams()
  useEffect(()=>{
      axios.get(`http://localhost:5505/api/products/${id}`).then(res=>{
          setDetail(res.data)
      })
  },[id])
  return (
    <div className='details'>
<div className="container">
  <div className="left-detail">
    <img src={detail.image} alt="" />
  </div>
  <div className="right-detail">
    <h2>{detail.title}</h2>
    <h4>{detail.price}</h4>
    <p>{detail.description}</p>
  </div>
</div>
    </div>
  )
}

export default Detail