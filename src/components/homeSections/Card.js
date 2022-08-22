import React, { memo } from 'react'
import { Navigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { MenCardDiv } from '../../styled/MainStyles'

const Card = ({title,description,price,image,rating,category}) => {
  
    const path=`/category/${category}`
   
    return (
        <MenCardDiv>
        <img src={image} alt="men's clothes" />
        <div className='product-desc'>
            <h3>{title}  <span>{rating}</span></h3>
            <p>{description}</p>
            <div>
                <NavLink to={path}><button>Buy Now</button></NavLink>
                <span>$ {price}</span>  
            </div>
        </div>
    </MenCardDiv>
  )
}

export default memo(Card)