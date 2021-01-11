import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://www.linkedin.com/in/ian-montgomery/'}
            >
              {btn || "Let's Talk"}
            </a>
            <p className="contact-wrapper__text">Or use the form below</p>
            <div>
              <form name="contact" method="POST" data-netlify="true">
                <p className="contact-wrapper__text">
                  <label>
                    Your Name: <input type="text" name="name" />
                  </label>
                </p>
                <p className="contact-wrapper__text">
                  <label>
                    Your Email: <input type="email" name="email" />
                  </label>
                </p>
                <p className="contact-wrapper__text">
                  <label>
                    Message: <textarea name="message"></textarea>
                  </label>
                </p>
                <p className="contact-wrapper__text">
                  <button type="submit">Send Message</button>
                </p>
              </form>
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
