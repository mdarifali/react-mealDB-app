import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [searchMeal, setSearchMeal] = useState('');
    const [meals, setMeals] = useState([]);

    const searchFood = e => {
        setSearchMeal(e.target.value);
    };

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    }, [searchMeal]);

    return (
        <div className="container my-5">
            <div className='row g-4'>
                <h1 className='text-center text-white'>Search Your Favorite Food</h1>
                <div className='d-flex justify-content-center my-4'>
                    <input onChange={searchFood} className='form-control border border-warning border-3 w-25' type="text" placeholder='Search Food' />
                </div>
                {
                    meals.map(meal =>
                        <Product

                            product={meal}
                            key={meal.idMeal}
                           
                        ></Product>


                    )
                }
            </div>
        </div>
    );
};

export default Products;