import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad" src="https://im0-tub-ru.yandex.net/i?id=a7f297347f239bc2337e89da5e7b8399&n=13" alt=""/>
                <div>
              <h3>Hello, {!user ? "Guest" : user.email}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct  image={item.image} title={item.title} id={item.id} price={item.price} rating={item.rating}/>
                    ))}
                    
                    
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
