export default function GPTRecipe() {
    const recipe = {
        title: "Beef Bolognese Pasta",
        description: "Based on the ingredients you have available, I would recommend making a simple and delicious Beef Bolognese Pasta. Here is the recipe:",
        ingredients: [
            "1 lb. ground beef",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "2 tablespoons tomato paste",
            "1 (28 oz) can crushed tomatoes",
            "1 cup beef broth",
            "1 teaspoon dried oregano",
            "1 teaspoon dried basil",
            "Salt and pepper to taste",
            "8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)",
        ],
        instructions: [
            "Bring a large pot of salted water to a boil for the pasta.",
            "In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.",
            "Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.",
            "Stir in the tomato paste and cook for 1 minute.",
            "Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.",
            "Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.",
            "While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.",
            "Add the Bolognese sauce to the cooked pasta and toss to combine.",
            "Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.",
        ],
    };

    return (
        <section>
            <h2>Chef Ram Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
                <p>{recipe.description}</p>
                <h3>{recipe.title}</h3>
                <strong>Ingredients:</strong>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <strong>Instructions:</strong>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </article>
        </section>
    );
}
