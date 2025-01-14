import React from "react";
import IngredientsList from "./components/IngredientsList";
import GPTRecipe from "./components/GPTRecipe";

export default function Body() {
    const [ingredients, setIngredients] = React.useState(["ground beef", "onions", "garlic"]); // Corrected initialization of ingredients
    const [recipeShown, setRecipeShown] = React.useState(false);

    // Toggles the visibility of the recipe
    function toggleRecipeShown() {
        setRecipeShown((prev) => !prev); // Fixed variable name
    }

    // Handles adding a new ingredient
    function addIngredient(event) {
        event.preventDefault(); // Prevents form from refreshing the page
        const newIngredient = event.target.ingredient.value.trim(); // Retrieves ingredient from the form input
        if (newIngredient) {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); // Updates ingredients state
            event.target.reset(); // Clears the input field
        }
    }

    return (
        <main>
            {/* Form to add ingredients */}
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. eggs"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {/* List of ingredients */}
            <ul>
                {ingredients.length > 0 && (
                    <IngredientsList
                        ingredients={ingredients} // Fixed capitalization of "Ingredients"
                        toggleRecipeShown={toggleRecipeShown}
                    />
                )}
            </ul>

            {/* Recipe component (conditionally shown) */}
            {recipeShown && <GPTRecipe ingredients={ingredients} />}
        </main>
    );
}
