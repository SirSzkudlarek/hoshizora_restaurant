import React from 'react'

import { images }  from '../../constants';

const SubHeading = ({title}) => (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__yusei-magic'>{title}</p>
      <img src={images.spoon} alt="spoon_image" className='spoon__image'></img>
    </div>
  )

export default SubHeading
