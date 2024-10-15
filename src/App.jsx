import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./Components/pages/StartPage";
import CategoryPage from "./Components/pages/CategoryPage";
import RecipesPage from "./Components/pages/RecipesPage";
import SearchResultPage from './Components/pages/SearchResultPage.jsx';
import { fetchData } from "./api.js";
import { sortCategories, calculateRecipeDifficulty } from "./util.js";




function App() {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])

  const fetchAllData = async () =>{
    const fetchedRecipes = await fetchData(import.meta.env.VITE_API_URL+"/recipes")
    const modifiedRecipes = fetchedRecipes.map(recipe => ({
      ...recipe,
      difficulty: calculateRecipeDifficulty(recipe.timeInMins, recipe.ingredients, recipe.instructions),
    }));
    const fetchedCategories = await fetchData(import.meta.env.VITE_API_URL+"/categories")
    const sortedCategories = sortCategories(fetchedCategories)
    setRecipes(modifiedRecipes)
    setCategories(sortedCategories)
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    
     <Router>
      <Routes>
        <Route path="/" element ={<StartPage recipes={recipes} categories={categories}/>} />
        <Route path="/categories/:category" element ={<CategoryPage recipes={recipes} categories ={categories}/>} />
        <Route path="/recipe/:recipeId" element ={<RecipesPage recipes={recipes} categories ={categories}/>} />
        <Route path="/search-result" element = {<SearchResultPage recipes={recipes} categories ={categories}/>} />
      </Routes>
     </Router>
    
  )
}

export default App
