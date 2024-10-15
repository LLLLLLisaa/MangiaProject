import React, { useState } from "react";
import './footer.css'; 

const Modal = ({ type, onClose }) => {
    const getContent = () => {
        switch (type) {
            case 'contact':
                return (
                    <div className="footer-info">
                        <p>Adress: Magiavägen1, 11111, Postort</p>
                        <p>Tel: 123-456-789</p>
                        <p>Email: email@magie.com</p>
                        <button className="close-button" onClick={onClose}>Stäng</button>
                    </div>
                );
            case 'privacy':
                return (
                    <div className="policy-items">
                        <p>1. Insamling av personlig information</p>
                        <p>2. Användning av information</p>
                        <p>3. Delning av information</p>
                        <p>4. Datasäkerhet</p>
                        <p>5. Rätt till insyn</p>
                        <button className="close-button" onClick={onClose}>Stäng</button>
                    </div>
                );
            case 'terms':
                return (
                    <div className="terms-items">
                        <p>Villkor för användning av tjänster</p>
                        <p>Ytterligare villkor går här</p>
                        <button className="close-button" onClick={onClose}>Stäng</button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {getContent()}
            </div>
        </div>
    );
};

export default Modal