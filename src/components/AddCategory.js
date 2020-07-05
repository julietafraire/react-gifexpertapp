import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({categories, setCategories}) => {


    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2 ) {
            setCategories([
                inputValue,
                ...categories              
            ]);
            setInputValue('')
        }

        
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange }
            />
        </form>

     );
}

AddCategory.propTypes = {
    categories: PropTypes.array.isRequired,
    setCategories: PropTypes.func.isRequired
}
 
export default AddCategory;