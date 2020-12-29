import React from 'react';

const Rating = ({ Rate, setRateFilter }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span onClick={()=>setRateFilter(i)} >
⭐
          </span>
        );
      } else {
        starsArray.push(
          <span onClick={()=>setRateFilter(i)} >
            ★
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(Rate)}</div>;
};

Rating.defaultProps = {
  setRateFilter: () => {},
  Rate: 1
};

export default Rating;
