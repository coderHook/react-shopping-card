import React, { Component } from 'react'
import './CartItem.css'

export default class CartItem extends Component {
  render() {
    return (
      <li>
        <b>{this.props.name}: </b>  
        {this.props.price} € 
        <button onClick=            {this.props.onPlusClick}>+</button> 
        Quantity: {this.props.quantity}
      </li>
    )
  }
}
