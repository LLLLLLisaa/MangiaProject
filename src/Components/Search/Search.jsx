import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {FaSearch} from "react-icons/fa";


function Search(allRecipes) {
    const [query, setQuery] = useState("");
    const [showInput, setShowInput] = useState(false);
    const navigate = useNavigate();

    const handleSearch = () =>{
        console.log("Search for: ",query)
        navigate(`/search-result?query=${encodeURIComponent(query)}`);
        setShowInput(false);
    };
  
    return(
        <>
            <div className="navbar">
                <input className="search-input"type="text" placeholder="sök för..." value={query} onChange={(e) =>{setQuery(e.target.value)}} />
                <button className="search-button" onClick ={handleSearch}>Search</button>
            </div>

            
            {/* <div className ="mobile-navbar">
            <button className="mobile_search-button" onClick= {() => setShowInput(!showInput)}><FaSearch /></button>
                {showInput && (
                <div>
                  <input className="search-input"type="text" placeholder="skriv in recipe namn" value={query} onChange={(e) =>{setQuery(e.target.value)}} />
                  <button className = "submit-button" onClick={handleSearch}>Search</button>
                </div>)}
            </div> */}



            <div className="mobile-navbar">
                {!showInput ? (
                    
                    <button  className="mobile_search-button"  onClick={() => setShowInput(true)}>
                    <FaSearch />
                    </button>
                ) : (
            
                    <div>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="sök för..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="submit-button" onClick={handleSearch}>
                        Search
                    </button>
                    </div>
                )}
                </div>
        </>
    )
}

export default Search;