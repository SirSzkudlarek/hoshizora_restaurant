import React from 'react'

import { stars } from '../../constants';

import './StarsBackground.css';

const Stars = ({width, top, right, image }) => (
  <img className='hoshizora__star' style={{top: `${top}%`, right: `${right}%`, width: width}} src={image} alt='star' />
)

const StarsBackground = () => (
    <div className='hoshizora__stars-background'>
      {stars.map(({id, image, top, right, width }) => (
        <Stars key={id} width={width && width} top={top} right={right} image={image}/>
       ))}
    </div>
  )

export default StarsBackground
