import React, { useState, Fragment } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return ( 
        <Fragment>
            <h2>GifExpertApp</h2>

            <AddCategory 
                categories={categories}
                setCategories={setCategories}
            />

            <hr /> 

            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={category}
                            category={category} 
                        />
                    )
                }
            </ol>

            

        </Fragment>
     );
}
 
export default GifExpertApp;