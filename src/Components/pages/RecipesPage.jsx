import {React, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Navbar/Navbar";
import Rating from "../Rating/Rating";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import CommentForm from "../CommentForm/CommentForm";
import CommentContainer from "../CommentContainer/CommentContainer";
import "./RecipesPage.css";
import { fetchData } from "../../api";

function RecipesPage({ recipes, categories }) {
  const [comments, setComments] = useState([])
  const { recipeId } = useParams();
  
  const fetchComments = async() => {
    const fetchedComments = await fetchData(import.meta.env.VITE_API_URL + `/recipes/${recipeId}/comments`);
    setComments(fetchedComments);
    console.log(fetchedComments)
  }

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
};

  useEffect(() => {
    console.log("Fetching comments...")
    fetchComments();
  }, [])

  if (!recipes || recipes.length === 0) {
    return <p>Laddar recept...</p>;
  }
  const recipe = recipes.find((recipe) => recipe._id === recipeId);

  return (
    <div className="recipe-page, page">
      <Header />
      <NavBar recipes={recipes} categories={categories} />
      <main>
        <div className="recipe-page-container">
          <RecipeDetails
            image={recipe.imageUrl}
            title={recipe.title}
            description={recipe.description}
            time={recipe.timeInMins}
            difficulty={recipe.difficulty}
            rating={recipe.avgRating}
            categories={recipe.categories}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            />
          <div className="rating-comment-container">
            <Rating id={recipeId}/>
            <CommentForm id={recipeId} addComment={addComment}/>
          </div>  
          
          <CommentContainer comments={comments}/>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default RecipesPage;
