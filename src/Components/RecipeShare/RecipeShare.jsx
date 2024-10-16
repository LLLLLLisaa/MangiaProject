import React from 'react';
import './RecipeShare.css'


const RecipeShare = () =>{
    const handleShare =() => {
        if(navigator.share) {
            navigator.share({
                title: 'Kolla på detta recept!',
                url: window.location.href
            })
            .then(() => console.log('Receptet delades!'))
            .catch((error) => console.log('Dela misslychades',error));
            }else {
                alert('Din webbläsare statustödjer inte delningsfunktionen.')
            }
        };
        const handlePrint = () => {
            window.print();
        };

        return (
            <div className ="share-print-container">
                <button className = "dela-button" onClick ={handleShare}>Dela</button>
                <button className ="skrivut-button" onClick ={handlePrint}>Skriv ut</button>
            </div>
        )
    }

    export default RecipeShare;
