import geminiAI from '../config/gemeni.js'

const AISummery = async (question) => {
    try {

        const response = await geminiAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents: question,
        });

        return (response.text);
    } catch (error) {
        console.log(error);
        throw error
    }
}

export { AISummery }