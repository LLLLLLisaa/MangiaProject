export const sortCategories = (categories) => {
    const newCategoryOrder = ['Förrätt', 'Varmrätt', 'Dessert', 'Billigt', 'Långkok', 'Lägglagat', 'Lyxigt', 'Snabblagat', 'Somrigt', 'Vegetariskt']

    const sortedCategories = [...categories].sort((a,b) => {

        const indexA = newCategoryOrder.indexOf(a.name);
        const indexB = newCategoryOrder.indexOf(b.name);

        if(indexA !== -1 && indexB !== -1){
            return indexA - indexB;
        }

        if (indexA !== -1) {
            return -1;
        }
        
        if (indexB !== -1) {
            return 1; 
        }

        return 0;
    }) 
    return sortedCategories;
}

export const calculateRecipeDifficulty = (time, ingredients, instructions) => {
    const numIngredients = ingredients.length;
    const numInstructions = instructions.length;
    const timeScore = Math.min(Math.floor(time / 30), 2);
    const ingredientsScore = Math.min(Math.floor(numIngredients / 5), 2);
    const instructionsScore = Math.min(Math.floor(numInstructions / 5), 2);
    const totalScore = timeScore + ingredientsScore + instructionsScore;

    if (totalScore <= 2) return "Enkel";
    if (totalScore <= 4) return "Medel";
    return "Avancerad";
}

