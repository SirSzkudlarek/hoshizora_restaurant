import React from 'react'

import { images } from '../../constants';

import './StarsBackground.css';

const Stars = ({className, image}) => (
  <img className={`hoshizora__star ${className}`} src={image} alt='star' />
)

const StarsBackground = () => (
    <div className='hoshizora__stars-background'>
      <Stars className='hoshizora__star-one' image={images.sparkle2}/>
    </div>
  )

export default StarsBackground
