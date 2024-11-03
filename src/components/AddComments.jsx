import React, { useState } from 'react';
import styles from './addComments.module.css'; 

const AddComment = () => {
    const [inputText, setInputText] = useState('');
    const [formattedText, setFormattedText] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleButtonClick = () => {
        const words = inputText.split(' ').map(word => word.toUpperCase());
        setFormattedText(prevText => [...prevText, words]);
        setInputText(''); 
    };

    const getColor = (index) => {
        const colors = ['green', 'red', 'blue']; 
        return colors[index % colors.length]; 
    };

    return (
        <div className={styles.addCommentSection}>
            <input 
                type="text" 
                value={inputText} 
                onChange={handleInputChange} 
                placeholder="Ведите комментарий" 
            />
            <button className={styles.addCommentBtn} onClick={handleButtonClick}>Отправить</button>
            <div>
                {formattedText.map((wordsArray, index) => (
                    <div key={index}>
                        {wordsArray.map((word, wordIndex) => (
                            <span key={wordIndex} style={{ color: getColor(wordIndex) }}>
                                {word}{' '}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddComment;