import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { RecipeContext } from './RecipeContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Ingredient(props) {
    const { setIngredientsInRecipe } = useContext(RecipeContext);
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        if (checked)
            setIngredientsInRecipe((current) => [...current, props.id]);
        else {
            setIngredientsInRecipe((current) => {
                let newArr = current.filter((id) => id !== props.id)
                return newArr;
            });
        }
    }, [checked]);

    return (
        <div className='col-md-8 col-lg-4 col-xl-2' style={{ float: 'left', margin:'5px' }}>
            <Card style={{ width: '18rem', minHeight:'350px'}}>
                <Card.Img variant="top" src={props.imgUrl} height='100px' />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Calories: {props.calories}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <label style={{marginRight:'5px'}}>Include me</label>
                    <input type='checkbox' onChange={() => setChecked((state) => !state)}></input>
                </Card.Body>
            </Card>
        </div>
    )
}

