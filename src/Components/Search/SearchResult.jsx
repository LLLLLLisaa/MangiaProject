import React from "react";
import CardContainer from "../CardContainer/CardContainer";

function SearchResult ({recipes, query})  {
  const lowcaseQuery = query.toLowerCase()
   
  // const normalizeQuery = (query) =>{
  //   return query.toLowerCase()
  //   .replace(/ä/g,'a')
  //   .replace(/ö/g,'o')
  //   .replace(/å/g,'a');
  // } 

  const isNum = !isNaN(query);

  // const normalizeCategory = recipes.filter(recipe => recipe.categories.map(normalizeCategory(category)))

  const timeMatchRecipes = recipes.filter(recipe => recipe.timeInMins == Number(lowcaseQuery));

  const categoriesMatchQuery = recipes.filter(recipe => recipe.categories.some(category => category.toLowerCase() === lowcaseQuery));

  // const categoriesMatchQuery = normalizeCategory.some(category =>category.toLowerCase() === lowcaseQuery);

  const nameMatchRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(lowcaseQuery))

  const filterRecipes = isNum
  ?timeMatchRecipes
  :categoriesMatchQuery.length>0
    ?categoriesMatchQuery
    :nameMatchRecipes;

    return (
      <div className="searched-recipes, page__content-wrapper">
        <div className ="page__content-section">
          <h2>Result</h2>
             <h4>
              {isNum?(<>
              Search: {query}
              <br />
              Visa alla menyer med denna tillagningstid
              </>)
              :(<>
               {
                categoriesMatchQuery.length>0?
                (<>
                Search: {query}
                <br />
                Visa alla menyer under dessa categori
                </>)
                :(<>
                Search: {query}
                <br />
                Visa alla menyer som sina namn innehåller dessa bokstäver
                </>)
               }
              </>)}
             </h4>
             {filterRecipes.length > 0
             ?<CardContainer recipes = {filterRecipes}/>
             :"Den här menyn kommer att läggas till snart"}

        </div>
      </div>
    )
}

export default SearchResult;
 