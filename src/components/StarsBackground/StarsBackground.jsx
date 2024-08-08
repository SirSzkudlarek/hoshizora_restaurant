import React from 'react'

import { stars__desktop, stars__mobile } from '../../constants';

import './StarsBackground.css';

const Stars = ({width, top, right, image }) => (
  <img className='hoshizora__star' style={{top: `${top}%`, right: `${right}%`, width: width}} src={image} alt='star' />
)

const StarsBackground = ({className, mobile}) => {
  const stars = mobile ? stars__mobile : stars__desktop;
  return (
    <div className={`hoshizora__stars-background ${className ? className : ' '}`}>
      {stars.map(({id, image, top, right, width }) => (
        <Stars key={id} width={width && width} top={top} right={right} image={image}/>
       ))}
    </div>
  )}

export default StarsBackground
