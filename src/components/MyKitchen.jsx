import { Component } from "react";
import Recipes from "./Recipes";
import axios from 'axios'
import Ingredient from "./Ingredient";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import IngredientsIn from "./IngredientsIn";

const MySwal = withReactContent(Swal)

export default class MyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            done: []
        }
    }
    render() {
        return (
            <div className="MyKitchen">
                <Recipes recipes={this.state.recipes} showIngredients={this.showIngredients} prepareDish={this.prepareDish} />
                {this.state.done.length > 0 ? <Recipes done={true} recipesDone={this.state.done} eatDish={this.eatDish} showIngredients={this.showIngredients}/> : null}
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://localhost:44379/api/recipes').then((response) => {
            const recipes = response.data.filter((recipe) => recipe.Is_done === false)
            const done = response.data.filter((recipe) => recipe.Is_done === true)
            this.setState({ recipes, done })
        })
    }

    componentWillUnmount() {

    }

    prepareDish = (Id, Name, CookingMethod, ImgUrl) => {
        const recipeDone = {
            Id,
            Name,
            CookingMethod,
            ImgUrl
        }
        const newRecipes = this.state.recipes.filter((recipe) => recipe.Id !== Id)
        const value = 1
        axios.put(`https://localhost:44379/api/Recipes?id=${Id}&value=${value}`).then((response) => console.log(response.data))
        this.setState((prevState) => {
            return {
                done: [...prevState.done, recipeDone],
                recipes: newRecipes
            }
        })
    }

    eatDish = (Id, Name, CookingMethod, ImgUrl) => {
        const recipeToReturn = {
            Id,
            Name,
            CookingMethod,
            ImgUrl
        }
        const newRecipes = [...this.state.recipes, recipeToReturn]
        const newDone = this.state.done.filter((recipe) => recipe.Id !== Id)
        const value = 0
        axios.put(`https://localhost:44379/api/Recipes?id=${Id}&value=${value}`).then((response) => console.log(response.data))
        this.setState({ recipes: newRecipes, done: newDone })
    }

    showIngredients = (recipeId) => {
        axios.get(`https://localhost:44379/api/recipes/${recipeId}`).then((response) => {
            MySwal.fire({
                title: <i>Recipe Ingredients:</i>,
                html: <IngredientsIn ingredients={response.data} />
            })
        })
    }
}