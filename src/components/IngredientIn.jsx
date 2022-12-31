import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function IngredientIn(props) {
    return (
        <div className='Ingredient' style={{ float: 'left' }}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgUrl} width='150px' />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Calories: {props.calories}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                </Card.Body>
            </Card>
        </div>
    )
}
