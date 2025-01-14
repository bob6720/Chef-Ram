export default function IngredientsList({ ingredients, toggleRecipeShown }) {
    const ingredientsListItems = ingredients.map((ingredient, index) => (
        <li key={`${ingredient}-${index}`}>{ingredient}</li> // Added index to the key for uniqueness
    ));

    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {ingredientsListItems}
            </ul>
            {ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={toggleRecipeShown}>Get a recipe</button>
                </div>
            )}
        </section>
    );
}
