import React from 'react';
import Rating from './Rating'

const Filter = ({ setTitleFilter, RateFilter, setRateFilter }) => {
    return (
        <div>
            <div>
        <input  type="text" placeholder="Search for a movie..." 
        onChange={(e) => setTitleFilter(e.target.value)}/> 
        <div>
        <Rating Rate={RateFilter} setRateFilter={setRateFilter} />
        </div>
            </div>
    
        </div>
    )
}

export default Filter
