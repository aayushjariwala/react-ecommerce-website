import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'
import addproduct from '../../assets/add-product.png'
import checklist from '../../assets/checklist.png'

const SideBar = () => {
  return (
    <div className='sidebar'>
            <Link to={'/addproduct'} >
            <div className='sidebar-icon'>
                <img src={addproduct} alt="" />
                <p>Product Add</p>
             </div>
            </Link>


            <Link to={'/listproduct'} >
            <div className='sidebar-icon'>
                <img src={checklist} alt="" />
                <p>Produc List</p>
             </div>
            </Link>



    </div>
  )
}

export default SideBar