import React from 'react'
import { WelcomeDiv } from '../../styled/MainStyles'
import selectCloth from '../../styled/images/selectCloth.jpg'
import addToCart from '../../styled/images/ShoppingCart.jpg'
import payBill from '../../styled/images/payin.jpg'


const Welcome = () => {
  return (
    <WelcomeDiv>
        <div className="steps">

            <div className="selectCloth">
                <h3>Select Your Product</h3>
                <img src={selectCloth} alt="selecting clothes" />
            </div>

            <div className="addToCart">
                <h3>Add to Cart</h3>
                <img src={addToCart} alt="add To Cart" />
            </div>

            <div className="payBill">
                <h3>Pay your Bill</h3>
                <img src={payBill} alt="paying bill" />
            </div>
        </div>
    </WelcomeDiv>
  )
}

export default Welcome