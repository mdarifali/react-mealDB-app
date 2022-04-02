import React from 'react';
import { useState, useEffect } from 'react';
import Category from '../Category/Category';

const FoodCategories = () => {

    const [categorys, setcategorys] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
        fetch(url)
            .then(res => res.json())
            .then(data => setcategorys(data.categories));

    }, []);

    return (
        <div className="container my-5">
            <div className='row g-4'>
                <h1 className='text-center text-white'>Favorite Food Category</h1>
                
                {
                    categorys.map(category =>
                        <Category
                        
                            category={category}
                            key={category.idCategory}
                        
                        />
                    )
                }
            </div>
        </div>
    );
};

export default FoodCategories;