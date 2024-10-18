import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 301;
    } else {
      current.scrollLeft += 301;
    }
  };

  return (
    <div className="hoshizora__gallery flex_center">
      <div className="hoshizora__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__yusei-magic">Photo Gallery</h1>
        <p className="p__kaisei-tokumin" style={{ color: '#AAAAAA', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque
          egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="hoshizora__gallery-images">
        <div className="hoshizora__gallery-images_container" ref={scrollRef}>
          {[images.galleryImg01, images.galleryImg02, images.galleryImg03, images.galleryImg04].map((image, index) => (
            <div className="hoshizora__gallery-images_card flex_center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="hoshizora__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
