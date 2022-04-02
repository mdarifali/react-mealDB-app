import React from 'react';
import { Card, Button} from 'react-bootstrap';


const Product = ({ product, porductDetails}) => {
    const { strMeal, strArea, strMealThumb } = product;


    return (
        <div className="col-md-3 p-3">
            <Card style={{ width: '18rem' }} className="shadow-lg">
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strArea}
                    </Card.Text>
                    <Button onClick={porductDetails} variant="warning">Show Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;