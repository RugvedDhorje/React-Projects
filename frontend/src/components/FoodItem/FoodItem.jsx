import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = (props) => {

  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-img' src={props.image}alt="" />
        {!cartItems[props.id]
        ?<img className='add' onClick={()=>addToCart(props.id)} src={assets.add_icon_white} />
          :<div className='food-item-counter'>
            <img onClick={()=>removeFromCart(props.id)} src={assets.remove_icon_red}/>
            <p>{cartItems[props.id]}</p>
            <img onClick={()=>addToCart(props.id)} src={assets.add_icon_green}/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{props.name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-description'>{props.description}</p>
        <p className="food-item-price">${props.price}</p>
      </div>
    </div>
  )
}

export default FoodItem
