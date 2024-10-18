import React, { useRef } from 'react';
import { MainHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../../constants';
import './Gallery.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animsScrollTrigger = {
  scrollTrigger: {
    trigger: '.hoshizora__laurels',
    start: 'top 75%', // when the top of the trigger hits the top of the viewport
  },
};

const Gallery = () => {
  const gallery_content_textRef = useRef();
  const gallery_content_buttonRef = useRef();
  const gallery_imagesRef = useRef();

  useGSAP(() => {
    gsap.from(gallery_content_textRef.current, { x: -100, opacity: 0, delay: 2, duration: 1, ...animsScrollTrigger });
    gsap.from(gallery_content_buttonRef.current, {
      x: -100,
      opacity: 0,
      delay: 2.5,
      duration: 1,
      ...animsScrollTrigger,
    });
    gsap.from(gallery_imagesRef.current, { x: 200, opacity: 0, delay: 2, duration: 2, ...animsScrollTrigger });
  });

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
        <MainHeading heading="Photo Gallery" target={'.hoshizora__gallery'} />
        <p ref={gallery_content_textRef} className="p__kaisei-tokumin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque
          egestas mu.
        </p>
        <button ref={gallery_content_buttonRef} type="button" className="custom__button">
          View More
        </button>
      </div>
      <div ref={gallery_imagesRef} className="hoshizora__gallery-images">
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
      <div className="section__gradient-wrapper blue-gradient">
        <img className="section__gradient" src={images.sectionGradient} alt="section__gradient2"></img>
      </div>
    </div>
  );
};

export default Gallery;
