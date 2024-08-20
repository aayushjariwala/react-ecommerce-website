import React from 'react'
import './Admin.css'
import SideBar from '../../components/sidebar/SideBar'
import AddProduct from '../../components/addproduct/AddProduct'
import { Route, Routes } from 'react-router-dom'
import ListProduct from '../../components/listproduct/ListProduct'



const Admin = () => {
  return (
    <div className='admin'>
      <SideBar />
      <Routes>
        <Route  path="/addproduct" element={<AddProduct />}/>
        <Route  path="/listproduct" element={<ListProduct />}/>
      </Routes>




    </div>
  )
}

export default Admin