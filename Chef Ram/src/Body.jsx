export default function Body() {
    const ingredients = ["eggs", "flour", "sugar"];

    const ingredientList = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted!");
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e.g. eggs"
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    );
}