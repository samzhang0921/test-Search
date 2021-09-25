import React from 'react';
import { createComponent } from 'react-fela';
import starG from '../images/starG.svg'
import starY from '../images/starY.svg'

const RatingContainer = createComponent(
  () => ({
    padding: '2px 0 3px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }),
  'div'
)

const RatingStarContainer = createComponent(
  ({starG}) => ({
    display: 'block;',
    width: '72px',
    height: '12px',
    backgroundImage: `url(${starG.src})`,
    backgroundSize: '12px 12px',
    
  }),
  'div'
);

const RatingStar = createComponent(
  ({starY, rating}) => ({
    width: `${rating}%`,
    height: '100%',
    backgroundImage: `url(${starY.src})`,
    backgroundSize: '12px 12px',
  }),
  'div'
);

const TotalCount = createComponent(
  () => ({
    fontFamily: 'JetSansDigital,Arial,sans-serif',
    fontSize: '10px',
    marginLeft: '8px'
  }),
  'div'
);


const RatingComponent = ({ Rating }) => {
  const rating = Math.floor(100 * Rating.StarRating / 6 ) 
  return (
    <RatingContainer >
     <RatingStarContainer starG={starG}>
       <RatingStar starY={starY} rating={rating}/>
     </RatingStarContainer>
     <TotalCount>{Rating.Count}</TotalCount>
    </RatingContainer>
  );
};

export default RatingComponent;
