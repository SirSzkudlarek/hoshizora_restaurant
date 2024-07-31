import React from 'react'

import { images } from '../../constants';

import './StarsBackground.css';

const Stars = ({className, image}) => (
  <img className={`hoshizora__star ${className}`} src={image} alt='star' />
)

const StarsBackground = () => (
    <div className='hoshizora__stars-background'>
      <Stars className='hoshizora__star-one' image={images.sparkle1}/>
      <Stars className='hoshizora__star-two' image={images.sparkle2}/>
      <Stars className='hoshizora__star-three' image={images.sparkle3}/>
      <Stars className='hoshizora__star-four' image={images.sparkle1}/>
      <Stars className='hoshizora__star-five' image={images.sparkle1}/>
      <Stars className='hoshizora__star-six' image={images.sparkle4}/>
      <Stars className='hoshizora__star-seven' image={images.sparkle1}/>
      <Stars className='hoshizora__star-eight' image={images.sparkle1}/>
      <Stars className='hoshizora__star-nine' image={images.sparkle3}/>
      <Stars className='hoshizora__star-ten' image={images.sparkle5}/>
      <Stars className='hoshizora__star-eleven' image={images.sparkle1}/>
      <Stars className='hoshizora__star-tveleve' image={images.sparkle4}/>
      <Stars className='hoshizora__star-tveleve' image={images.sparkle1}/>
      <Stars className='hoshizora__star-thirteen' image={images.sparkle3}/>
      <Stars className='hoshizora__star-fourteen' image={images.sparkle1}/>
      <Stars className='hoshizora__star-fiveteen' image={images.sparkle5}/>
      <Stars className='hoshizora__star-sixteen' image={images.sparkle1}/>
      <Stars className='hoshizora__star-seventeen' image={images.sparkle1}/>
      <Stars className='hoshizora__star-eightteen' image={images.sparkle1}/>
      <Stars className='hoshizora__star-nineteen' image={images.sparkle1}/>
      <Stars className='hoshizora__star-tventy' image={images.sparkle1}/>
      <Stars className='hoshizora__star-tventy-one' image={images.sparkle1}/>
      <Stars className='hoshizora__star-tventy-two' image={images.sparkle1}/>
      <Stars className='hoshizora__star-tventy-three' image={images.sparkle1}/>
    </div>
  )

export default StarsBackground
