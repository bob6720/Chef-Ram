import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"

export default function Body() {
    const [ingredients, setIngredients] = React.useState([groundBeef, onions, garlic])
    const [recipeShown, setRecipeShown] = React.useState(false)
    function toggleRecipeShown() {
        setRecipeShown(prev=>!prevShown)
    }
    function addIngredient(formData) {
        const setIngredients = [...prevIngredients, newIngredient]
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e.g. eggs"
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredient.length > 0 && 
                <IngredientsList
                Ingredients={ingredients}
                toggleRecipeShown={toggleRecipeShown} 
                />}
            </ul>
        </main>
    );
}