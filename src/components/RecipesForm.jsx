import axios from 'axios';
import React, { useContext, useState } from 'react'
import Ingredients from './Ingredients'
import { RecipeContext } from './RecipeContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'

export default function RecipesForm() {
    const { ingredientsInRecipe } = useContext(RecipeContext);
    const createRecipe = () => {
        if (name === '') return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name of ingredient cant be null!',
        })
        axios.post('https://localhost:44379/api/Recipes', {
            name,
            imgUrl,
            cookingMethod,
            time,
            ingredientsIDS: ingredientsInRecipe
        }).then((response) => Swal.fire(
            'Good job!',
            'A new recipe created!',
            'success'
        ).then(() => {
            setTime(0)
            setName('')
            setImgUrl('')
            setCookingMethod('')
        }))
    }

    const [name, setName] = useState('')
    const [cookingMethod, setCookingMethod] = useState('')
    const [time, setTime] = useState(0)
    const [imgUrl, setImgUrl] = useState('')

    return (
        <div className='RecipesForm'>
            <h3>New Recipe</h3> <br />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="name" placeholder="Is it yummy...?" onChange={(e) => setName(e.target.value)} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Recipe image</Form.Label>
                    <Form.Control type="text" placeholder="Good looking" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
                    <Form.Text className="text-muted">
                        Don't forget the complete url.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCookingMethod">
                    <Form.Label>Recipe Cooking Method</Form.Label>
                    <Form.Control type="cookingMethod" placeholder="Enter cooking method..." onChange={(e) => setCookingMethod(e.target.value)} value={cookingMethod} />
                    <Form.Text className="text-muted">
                        please supply complete yummy method
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="name" placeholder="How much time...?" onChange={(e) => setTime(e.target.value)} value={time} />
                </Form.Group>
                <Button variant="primary" onClick={createRecipe}>Add Recipe</Button>
                <Button style={{ marginLeft: '10px' }} variant="secondary" onClick={() => {
                    setTime(0)
                    setName('')
                    setImgUrl('')
                    setCookingMethod('')
                }}>Clear Form</Button>
            </Form>
            <br /><br />
            <Ingredients />
        </div>
    )
}


