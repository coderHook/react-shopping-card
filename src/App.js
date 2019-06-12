import React, { Component } from 'react'
import './App.css';
import CartItem from './components/CartItem';
import CheckoutButton from './components/CheckoutButton';
import Clock from 'react-live-clock';



class App extends Component {

  state = {
    products: [
      {
          id: 1,
          name: "Prada Shoes",
          price: 570,
          quantity: 0
      },
      {
          id: 2,
          name: "Rolex Watch",
          price: 649,
          quantity: 0
      },
      {
          id: 3,
          name: "Paper clips",
          price: 0.1,
          quantity: 0
      }
    ],
    total: 0,
  }

  incrementQuantity = (productId) => {
    console.log('I am clicked id:', productId);
    
    const quantityUpdate = this.state.products.map(prod => {
      if(prod.id === productId) { 
        return {
          ...prod,
          quantity: prod.quantity+1
          } 
        } else {
            return prod
      }
    })

    this.setState({ products: quantityUpdate})

  }

  checkOut = () => {
    console.log('Checking Out', this.state.products)

    const total = this.state.products.reduce((acc, nextProd) => {
      return acc + nextProd.quantity * nextProd.price;
    }, 0)

    console.log('Total', total);

    return this.setState({total})
  }

render (){
  return (
    <div className="App">
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Amsterdam'} />

      <ul>
        {
          this.state.products.map( prod => {
            console.log('I am on mapping state');
            return <CartItem 
                      key={prod.id} 
                      name={prod.name} 
                      price={prod.price} 
                      onPlusClick={() => {this.incrementQuantity(prod.id)}}
                      quantity={prod.quantity}
                  />
          })
        }
      </ul>
      <CheckoutButton onClick={ () => { this.checkOut() }} total = {this.state.total }/>
    </div>
  );
  }  
}

export default App;
