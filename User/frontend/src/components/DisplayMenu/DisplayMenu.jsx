import React, { useContext } from 'react'
import './DisplayMenu.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const DisplayMenu = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='food-display' id='food-display'>
            <h2>The best dishes from our resturant</h2>
            <div className='food-display-list'>
                {food_list
                    .filter(item => category === "all" || category === item.category)
                    .map((item, index) => (
                        <FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                    ))}
            </div>
        </div>
    );
}

export default DisplayMenu