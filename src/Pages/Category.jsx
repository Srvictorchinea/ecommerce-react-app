import React, { useContext } from 'react'
import './CSS/Category.css'
import { ShopContext } from '../Context/ShopContext'

const Category = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default Category