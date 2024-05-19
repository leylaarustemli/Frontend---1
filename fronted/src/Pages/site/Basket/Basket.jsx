import React, { useContext } from 'react'
import "./Basket.css"
import MainContext from '../../../Context/Context'
const Basket = () => {
  const {data,setData,basket,setBasket,addToBasket,deleteBasket}=useContext(MainContext)

  return (
    <div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
      <th scope="col">Add</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {basket.map((item,index)=>(
      <tr>
      <th scope="row">{index+1}</th>
      <td>{item.title}</td>
      <td><img width="60px" src={item.image} alt="" /></td>
      <td>{item.totalPrice}</td>
      <td>{item.count}</td>
      <td><button onClick={()=>{
        addToBasket(item._id)
      }} className='btn btn-primary'>add</button></td>
      <td><button onClick={()=>{
        deleteBasket(item._id)
      }} className='btn btn-danger'>delete</button></td>
    </tr>
    ))}

  </tbody>
</table>
    </div>
  )
}

export default Basket