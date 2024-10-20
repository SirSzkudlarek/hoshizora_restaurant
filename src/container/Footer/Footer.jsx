import React from 'react';
import { MainHeading } from '../../components';
import { images } from '../../constants';
import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <div className="hoshizora__footer section__padding" id="contact">
      <div className="hoshizora__footer-info">
        <MainHeading heading="Contact" target={'.hoshizora__footer'} small={true} />
        <p className="p__yusei-magic">Experience authentic Japanese cuisine under the stars.</p>
        <div className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>You can find us here!</strong>
          </p>
          <p className="p__kaisei-tokumin">123 Sushi St, Tokyo, Japan</p>
        </div>

        <div className="footer__content-spacer"></div>

        <div className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Want to ask us question?</strong>
          </p>
          <p className="p__kaisei-tokumin">+81 123 456 789</p>
        </div>

        <div className="footer__content-spacer"></div>

        <div className="footer__content-wrapper">
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
        <p className="p__yusei-magic">In every bite, a tale awaits; follow our journey, where passion creates.</p>
        <div className="footer__content-wrapper">
          <p className="p__kaisei-tokumin">
            <strong>Serving hours:</strong>
          </p>
          <p className="p__kaisei-tokumin">Everyday from: 6am - to - 1am</p>
        </div>

        <div className="footer__content-spacer"></div>

        <div className="footer__content-wrapper">
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

        <div className="footer__content-spacer"></div>

        <div className="footer__content-wrapper">
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
