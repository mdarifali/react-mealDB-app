import React from 'react';
import { Card } from 'react-bootstrap';

const Category = ({ category }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = category;

    return (
        <div className="col-md-6 p-3 ">
            <Card className='h-100'>
                <Card.Img variant="top" src={strCategoryThumb} />
                <Card.Body>
                    <Card.Title>{strCategory}</Card.Title>
                    <Card.Text>
                        {strCategoryDescription}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;