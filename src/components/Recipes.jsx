import Recipe from "./Recipe"
import '../style/myCSS.css'

export default function Recipes(props) {
    if (props.done === true)
        return (
            <div className="float-container">
                <h2>Recipes Done: {props.recipesDone.length}</h2>
                {props.recipesDone.map((recipe) => <Recipe Id={recipe.Id} key={700} Name={recipe.Name}
                    CookingMethod={recipe.CookingMethod} ImgUrl={recipe.ImgUrl} done={true} showIngredients={props.showIngredients} eatDish={props.eatDish} />)}
            </div>
        );

    return (
        <div className="float-container">
            <h2>My Well Known Recipes</h2>
            <h3>Recipes Made:</h3>
            <div className="row">
                {props.recipes.map((recipe) => <Recipe Id={recipe.Id} key={recipe.Id} Name={recipe.Name}
                    CookingMethod={recipe.CookingMethod} ImgUrl={recipe.ImgUrl} showIngredients={props.showIngredients} prepareDish={props.prepareDish} />)}
            </div>
        </div>
    );
}