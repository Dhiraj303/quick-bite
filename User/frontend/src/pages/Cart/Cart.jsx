import React, { useContext } from "react";
import './cart.css';

 
 const Cart = () => {
    const {cartItems, food_list } = useContext()
    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                    <br />
                    <hr />
                    {food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {
                            return (
                                <div>
 
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p className="cross">{item.price * cartItems[item._id]}</p>
                                        <p onClick={()=>removeFromCart()}>x</p>
                                        <hr />
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
 
export default Cart;