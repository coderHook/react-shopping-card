import React, { Component } from 'react'

export default class CheckoutButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>Checkout
        </button>
        <p>Total Amount: {this.props.total}</p>
      </div>
    )
  }
}
