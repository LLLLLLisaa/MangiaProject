import React, { useState, useEffect } from "react";
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom"; 
import "./Category.css"

function Category({categories}) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    const [showCategories, setShowCategories] = useState(false);

    const filteredCategories = categories.slice(0,10)

    const resize = ()=> {
        setIsMobile(window.innerWidth <= 600)
    }

    const toggleSidebar = () => {
        setShowCategories(!showCategories);
    };
    useEffect (()=> {
        window.addEventListener('resize', resize)
    },[])

    return (
        <>
            <div className="sidebar-container">
                <button onClick={toggleSidebar} className="sidebar-toggle">
                    {/* Kategorier */}
                    {isMobile ?<FaBars />:"Kategorier"}
                </button>

                <div className={`sidebar ${showCategories ? 'active' : ''}`}>
                    {filteredCategories.map((category,index) =>(
                        <Link className="category-item" key={index} to={`/categories/${category.name}`} onClick={toggleSidebar}>{category.name} : {category.count}</Link>
                    ))}
                </div>
             </div>

            {/* </div> */}

            
            
                {/* <div className="mobile-navbar">
                   <button className="mobile_category-button" >
                       <FaBars />
                          <div className="category-content">
                              {filteredCategories.map((category, index) => (
                                <Link className = "category-item" key={index} to={`/categories/${category.name}`}>{category.name} : {category.count}</Link>  
                        ))}
                    </div>
                   </button>
                </div> */}

        </>
        
    );
}

export default Category;












