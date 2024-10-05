import React from 'react';
import { useRef } from 'react';
import './Chef.css';
import { images } from '../../constants';
import Crossline from '../../components/design/Crosslines';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Chef = () => {
  const chef__img = useRef();
  const chef__name = useRef();
  const chef__bio = useRef();
  const chef__title = useRef();
  const chef__title_accent = useRef();
  const chef__title_accent_star = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const animsScrollTrigger = {
    scrollTrigger: {
      trigger: '.hoshizora__chef',
      start: 'top 75%', // when the top of the trigger hits the top of the viewport
    },
  };

  useGSAP(() => {
    gsap.from(chef__img.current, { opacity: 0, duration: 3, delay: 0.5, ...animsScrollTrigger });
    gsap.from(chef__name.current, { opacity: 0, duration: 3, y: 100, ...animsScrollTrigger });
    gsap.from(chef__bio.current, { opacity: 0, duration: 3, y: 100, ...animsScrollTrigger });

    const title_anim = gsap.timeline({ ...animsScrollTrigger });
    title_anim.from(chef__title_accent.current, { x: 100, opacity: 0, duration: 1.5 });
    title_anim.from(chef__title_accent_star.current, { scale: 0.75, duration: 1 });
    title_anim.from(chef__title.current, { y: 100, opacity: 0, delay: 1, duration: 1.75 });
  });

  return (
    <div className="hoshizora__chef section__padding" id="chef">
      <div className="hoshizora__chef-title">
        <h1 ref={chef__title} className="headtext__yusei-magic">
          Traditional Chef
        </h1>
        <div ref={chef__title_accent} className="hoshizora__chef-title_accent">
          <img
            ref={chef__title_accent_star}
            className="hoshizora__chef-accent_star"
            src={images.sparkle1}
            alt="title__accent_star"
          ></img>
        </div>
      </div>
      <div className="hoshizora__chef-content">
        <div className="hoshizora__chef-image">
          <div className="hoshizora__chef-img_wrapper">
            <img ref={chef__img} className="hoshizora__chef-img lighting-border" src={images.chef} alt="chef"></img>
            <Crossline scrollTrigger={animsScrollTrigger} />
          </div>
          <div ref={chef__name} className="hoshizora__chef-name">
            <p className="p__kaisei-tokumin no-capitalize">Legend of Japanease Dining</p>
            <h2 className="p__yusei-magic">Sora Matsumoto</h2>
            <h3 className="hoshizora__japanease-text p__kaisei-tokumin">空 松本</h3>
          </div>
        </div>
        <div ref={chef__bio} className="hoshizora__chef-bio">
          <h2 className="p__yusei-magic">&#8222;Where Japanese Tradition Meets Culinary Perfection&#8220;</h2>
          <div className="hoshizora__chef-accent_line"></div>
          <p className="p__kaisei-tokumin no-capitalize">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos maecenas felis montes condimentum viverra
            odio? Lectus faucibus montes mauris facilisi nec, dis risus malesuada. Sollicitudin lorem eleifend volutpat
            vivamus venenatis neque. Sociosqu urna fringilla quis ante accumsan; venenatis augue mauris nascetur. Et mi
            fermentum porttitor, parturient ad sociosqu fringilla tellus.
          </p>
          <p className="p__kaisei-tokumin no-capitalize">
            Fringilla molestie himenaeos aliquam feugiat consectetur et augue nunc turpis. Ultricies risus netus nec
            lacus purus. Vulputate dignissim urna pharetra; eget curae interdum hac hendrerit. Sit molestie est
            tincidunt ultrices faucibus felis tempor sagittis. Himenaeos neque id vulputate porttitor in aenean augue
            pellentesque bibendum. Metus aptent aliquam habitasse nisl himenaeos leo.
          </p>

          <p className="p__kaisei-tokumin no-capitalize">
            Euismod fames gravida cubilia duis dictumst mi eget. Montes cras scelerisque quis nisi sodales. Sagittis
            finibus ultricies suscipit posuere finibus. Lacinia suspendisse quam felis dolor, tortor curae. Commodo
            turpis gravida volutpat purus vitae torquent vulputate luctus vulputate. Bibendum fames vivamus porta ac
            interdum metus; fames fringilla turpis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
