import { Configuration, OpenAIApi } from "openai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

// Set up OpenAI API client
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Ensure you set an environment variable for OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

// Function to get a recipe suggestion from ChatGPT
export async function getRecipeFromChatGPT(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await openai.createChatCompletion({
            model: "gpt-4", // model of gpt being used 
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024, // Adjust this based on your needs
        });
        return response.data.choices[0].message.content;
    } catch (err) {
        console.error(err.message);
        throw new Error("Failed to get a response from ChatGPT.");
    }
}
