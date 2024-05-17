
import './App.css'
import ROUTES from './Routes/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainContext from './Context/Context'
import { useEffect, useState } from 'react'


function App() {
  const router=createBrowserRouter(ROUTES)
  const[data,setData]=useState([])
  const[basket,setBasket]=useState([])
  const contextData={
    data,setData,basket,setBasket
  }
  return (
    
    <MainContext.Provider value={contextData}>
   <RouterProvider router={router}/>
    </MainContext.Provider>
  )
}

export default App
