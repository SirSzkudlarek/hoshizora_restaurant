import React, { useRef } from 'react';
import { MainHeading } from '../../components';
import { images } from '../../constants';
import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import './Footer.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animsScrollTrigger = {
  scrollTrigger: {
    trigger: '.hoshizora__footer',
    start: 'top 75%', // when the top of the trigger hits the top of the viewport
  },
};

const Footer = () => {
  const footer_contact_qouteRef = useRef();
  const footer_find_usRef = useRef();
  const contact_spacer_oneRef = useRef();
  const footer_questionRef = useRef();
  const contact_spacer_twoRef = useRef();
  const footer_mailRef = useRef();

  const footer_socials_qouteRef = useRef();
  const footer_visit_usRef = useRef();
  const socials_spacer_oneRef = useRef();
  const footer_socialRef = useRef();
  const socials_spacer_twoRef = useRef();
  const footer_bookRef = useRef();

  useGSAP(() => {
    const contactAnim = gsap.timeline({ ...animsScrollTrigger });
    contactAnim.from(footer_contact_qouteRef.current, {
      x: -100,
      opacity: 0,
      delay: 2,
      duration: 0.5,
    });
    contactAnim.from(footer_find_usRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
    contactAnim.from(contact_spacer_oneRef.current, {
      opacity: 0,
      duration: 0.25,
    });
    contactAnim.from(footer_questionRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
    contactAnim.from(contact_spacer_twoRef.current, {
      opacity: 0,
      duration: 0.25,
    });
    contactAnim.from(footer_mailRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });

    const socialsAnim = gsap.timeline({ ...animsScrollTrigger });
    socialsAnim.from(footer_socials_qouteRef.current, {
      x: 100,
      opacity: 0,
      delay: 2,
      duration: 0.5,
    });
    socialsAnim.from(footer_visit_usRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
    });
    socialsAnim.from(socials_spacer_oneRef.current, {
      opacity: 0,
      duration: 0.25,
    });
    socialsAnim.from(footer_socialRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
    });
    socialsAnim.from(socials_spacer_twoRef.current, {
      opacity: 0,
      duration: 0.25,
    });
    socialsAnim.from(footer_bookRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.5,
    });
  });

  return (
    <div className="hoshizora__footer section__padding" id="contact">
      <div className="hoshizora__footer-info">
        <MainHeading heading="Contact" target={'.hoshizora__footer'} small={true} />
        <p ref={footer_contact_qouteRef} className="p__yusei-magic">
          Experience authentic Japanese cuisine under the stars.
        </p>
        <div ref={footer_find_usRef} className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>You can find us here!</strong>
          </p>
          <p className="p__kaisei-tokumin">123 Sushi St, Tokyo, Japan</p>
        </div>

        <div ref={contact_spacer_oneRef} className="footer__content-spacer"></div>

        <div ref={footer_questionRef} className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Want to ask us question?</strong>
          </p>
          <p className="p__kaisei-tokumin">+81 123 456 789</p>
        </div>

        <div ref={contact_spacer_twoRef} className="footer__content-spacer"></div>

        <div ref={footer_mailRef} className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Email us at:</strong>
          </p>
          <p className="p__kaisei-tokumin" style={{ textTransform: 'lowercase' }}>
            info@hoshizorarestaurant.com
          </p>
        </div>
      </div>

      <div className="hoshizora__footer-title">
        <h2 className="headtext__yusei-magic">Hoshizora</h2>
        <img src={images.menuAccent} alt="footer__accent"></img>
        <div>
          <ul className="hoshizora__navbar-links">
            <li className="p__kaisei-tokumin">
              <a href="#home">Home</a>
            </li>
            <li className="p__kaisei-tokumin">
              <a href="#about">About</a>
            </li>
            <li className="p__kaisei-tokumin">
              <a href="#menu">Menu</a>
            </li>
            <li className="p__kaisei-tokumin">
              <a href="#awards">Awards</a>
            </li>
            <li className="p__kaisei-tokumin">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer__newsletter">
          <p className="p__yusei-magic">Join our newsletter!</p>
          <div className="footer__accent-line"></div>
          <p className="p__kaisei-tokumin">Stay in touch with our seasonal menu and discounts!</p>
          <div className="newsletter__form">
            <input type="email" className="newsletter__input"></input>
            <button type="button" className="custom__button">
              Join!
            </button>
          </div>
        </div>
      </div>

      <div className="hoshizora__footer-info">
        <MainHeading heading="Socials & Book Table" target={'.hoshizora__footer'} small={true} />
        <p ref={footer_socials_qouteRef} className="p__yusei-magic">
          In every bite, a tale awaits; follow our journey, where passion creates.
        </p>
        <div ref={footer_visit_usRef} className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Serving hours:</strong>
          </p>
          <p className="p__kaisei-tokumin">Everyday from: 6am - to - 1am</p>
        </div>

        <div ref={socials_spacer_oneRef} className="footer__content-spacer"></div>

        <div ref={footer_socialRef} className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Visit our socials!</strong>
          </p>
          <ul className="footer__social-list">
            <li className="footer__social-icon">
              <FaFacebook className="social-icon" />
            </li>
            <li className="footer__social-icon">
              <FaInstagram className="social-icon" />
            </li>
            <li className="footer__social-icon">
              <FaXTwitter className="social-icon" />
            </li>
            <li className="footer__social-icon">
              <FaTiktok className="social-icon" />
            </li>
          </ul>
        </div>

        <div ref={socials_spacer_twoRef} className="footer__content-spacer"></div>

        <div ref={footer_bookRef} className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Book your table, savor moments.</strong>
          </p>
          <button type="button" className="custom__button">
            Book Table
          </button>
        </div>
      </div>

      <div className="section__gradient-wrapper blue-gradient">
        <img className="section__gradient" src={images.sectionGradient} alt="section__gradient2"></img>
      </div>
    </div>
  );
};

export default Footer;
