const SYSTEM_PROMPT = `
    You are an assistant that receives a list of ingredients
    that a user has and suggests a recipe they could make with
    some or all of those ingredients. You don't need to use every 
    ingredient they mention in your recipe. The recipe can include 
    additional ingredients they didn't mention, but try not to include 
    too many extra ingredients. Format your response in markdown to make 
    it easier to render to a web page
`
export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    { role: "user", content: `I have ${ingredientsString}. Give me a recipe!` }
                ],
                max_tokens: 1024
            })
        })
        const data = await response.json()
        console.log(data) // <-- ajoute ça pour voir l'erreur exacte
        return data.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}