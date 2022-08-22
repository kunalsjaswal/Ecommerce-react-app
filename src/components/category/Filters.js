import React from 'react'
import { NavLink } from 'react-router-dom'
import { FilterDiv } from '../../styled/MainStyles'

const Filters = () => {


  return (
    <FilterDiv>
            <NavLink to="jewelery">Jewelery</NavLink>
            <NavLink to="menproducts">Men's Products</NavLink>
            <NavLink to="electronics">Electronics</NavLink>
            <NavLink to="womenproducts">Women's Products</NavLink>
    </FilterDiv>
  )
}

export default Filters