import React from 'react';
import {useLocation} from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchResult from '../Search/SearchResult';

function SearchResultPage({recipes, categories}) {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') ||'';

    return(
        <div className="page">
            <Header />
            <NavBar recipes={recipes} categories={categories}/>
            <main>
                <SearchResult recipes= {recipes} query={query} />
            </main>
            <Footer/>
        </div>
    )
}

export default SearchResultPage;
