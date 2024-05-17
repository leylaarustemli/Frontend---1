import React, { useEffect, useState } from 'react'
import "./Section3.css"
import axios from "axios"
const Section3 = () => {
const[data,setData]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:5505/api/products").then((res)=>{
        setData(res.data);
    });
},[]);
function filterData(category){
    if(category=="menu"){
        axios.get("http://localhost:5505/api/products").then((res)=>{
            setData([...res.data]);
    })}
        else{
            axios.get("http://localhost:5505/api/products").then((res)=>{
                setData([...res.data.filter((x)=>x.category.includes(category))])
            })
        }
    }

  return (
    <div className='section3'>
<div className="container">
    <span>OUR MENU</span>
    <h3>Discover Our Exclusive Menu</h3>
    <div className="eats">
        <div className="eat">
        <i class="fa-solid fa-cookie-bite"></i>
        <p onClick={()=>{
            filterData("menu");
        }}>Main</p>
        </div>
        <div className="eat">
        <i class="fa-solid fa-cookie-bite"></i>
        <p onClick={()=>{
            filterData("desert")
        }}>Deserts</p>
        </div>
        <div className="eat">
        <i class="fa-solid fa-cookie-bite"></i>
        <p>Drinks</p>
        </div>
    </div>
    <div className="cards">
       {data.map((item,index)=>( <div className="card">
            <div className="left-card">
                <img src={item.image}  alt="" />
            </div>
            <div className="center-card">
                <p>{item.title}</p>
                <span>{item.description}</span>
            </div>
            <div className="right-card">
                <h4>{item.price}</h4>
            </div>
            <button id='basket'>basket</button>
            <button id='detail'>detail</button>
        </div>))}
        
    </div>
</div>
    </div>
  )
}

export default Section3