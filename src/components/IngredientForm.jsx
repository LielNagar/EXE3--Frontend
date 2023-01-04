import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'


export default function IngredientForm() {
    const [name, setName] = useState('')
    const [imgUrl, setImgURL] = useState('')
    const [calories, setCalories] = useState(0)

    const createIngredient = () => {
        if (name === '') return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Name of ingredient cant be null!',
        })
        axios.post('https://localhost:44379/api/Ingredients', {
            name,
            imgUrl,
            calories
        }).then((response) => Swal.fire(
            'Good job!',
            'A new ingredient created!',
            'success'
        ).then(() => {
            setCalories(0)
            setName('')
            setImgURL('')
        }))
    }

    return (
        <div className='IngredientForm'>
            <h3>New Ingredient</h3> <br />
            <Form>
                <div className='row'>
                    <div className='col-xs-12'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Ingredient Name</Form.Label>
                            <Form.Control type="name" placeholder="Is it yummy...?" onChange={(e) => setName(e.target.value)} value={name} />
                        </Form.Group>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xs-12'>
                        <Form.Group className="mb-3" controlId="formBasicImage">
                            <Form.Label>Ingredient image</Form.Label>
                            <Form.Control type="text" placeholder="Good looking" onChange={(e) => setImgURL(e.target.value)} value={imgUrl} />
                            <Form.Text className="text-muted">
                                Don't forget the complete url.
                            </Form.Text>
                        </Form.Group>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-xs-12'>
                        <Form.Group className="mb-3" controlId="formBasicClories">
                            <Form.Label>Ingredient calories</Form.Label>
                            <Form.Control type="calories" placeholder="Enter calories..." onChange={(e) => setCalories(e.target.value)} value={calories} />
                            <Form.Text className="text-muted">
                                Diet
                            </Form.Text>
                        </Form.Group>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xs-12 col-sm-6'>
                        <Button variant="primary" onClick={createIngredient}>Add Ingredient</Button>
                    </div>
                    <div className='col-xs-12 col-sm-6'>
                        <Button style={{ marginLeft: '10px' }} variant="secondary" onClick={() => {
                            setCalories(0)
                            setName('')
                            setImgURL('')
                        }}>Clear Form</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

