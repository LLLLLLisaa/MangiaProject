import React from 'react';
import { useState } from 'react'
import './CommentForm.css'
import { postData } from '../../api';

const CommentForm = ({id, addComment}) => {
    const [form, setForm] = useState({
        comment: "",
        name: "",
        isAnonymous: false,
        isSubmitted: false,
    })

    const handleChange = (e) => {
        const {name, type, value, checked} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }
    // console.log(form)

    const handleSubmit = async (e) => {
        e.preventDefault();

        setForm(prev => ({
            ...prev,
            isSubmitted: true
        }));

        // const success = await postComment();
        const newComment =  await postData(import.meta.env.VITE_API_URL + `/recipes/${id}/comments`,{
            name: form.isAnonymous ? 'Anonym' : form.name,
            comment: form.comment
        })
        console.log(newComment);

        //Resets state if comment post fails.
        if(newComment) {
            addComment(newComment);
        }else{
            setForm(prev => ({
                ...prev,
                isSubmitted: false
            }));
        }
        
    }
    
    return (
        <div className='comment__form-container'>

            {form.isSubmitted ? (
                <div className='comment__form-success'>
                    <h2>Tack för din kommentar!</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='comment__form'>
                    <h2>Kommentera eller fråga</h2>
                    <textarea
                        className='comment__form-text'
                        onChange={handleChange}
                        name="comment"
                        placeholder='Skriv en kommentar'
                        maxLength="365"
                        wrap='soft'
                        required
                        />
                    <input
                        id='comment__form-name'
                        className=''
                        type="text"
                        onChange={handleChange}
                        name="name"
                        placeholder='Namn'
                        maxLength="30"
                        required={!form.isAnonymous}
                        />
                    <div>
                        <label className='comment__form-checkbox'>
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                name="isAnonymous"
                                />
                            Skicka anonymt
                        </label>
                    </div>
                    
                    
                    <button className="comment__form-button" type="submit">Skicka in</button>
                </form>
            )}
        </div>
    );
}

export default CommentForm;