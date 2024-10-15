import React from "react";
import {useParams} from "react-router-dom";
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './CategoryPage.css';

function CategoryPage({recipes,categories}) {
    const {category} = useParams();
    const filteredRecipes = recipes.filter(recipe => recipe.categories.includes(category));
    //console.log("filted recipes:",filteredRecipes)
    //console.log("categories:", recipes.categories)

    return (
         <div className = "category-page, page">
            <Header />
            <NavBar categories={categories} showHomeButton={true}/>
            <main>
                <div className="page__content-wrapper">
                    <div className="page__content-section">
                        <div className="section-header">
                            <h2>{category} Menu</h2>
                        </div>
                        <CardContainer recipes={filteredRecipes}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>)
}

export default CategoryPage;