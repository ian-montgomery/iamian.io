import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Form from '../Contact/Form'

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
              className="cta-btn cta-btn--about"
              href={email ? `mailto:${email}` : 'https://www.linkedin.com/in/ian-montgomery/'}
            >
              {btn || "Let's Talk"}
            </a>
            <div className="contact-form">
              <p className="contact-wrapper__text">Or use the form below</p>
              {/* <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p className="contact-wrapper__text">
                  <label>
                    Your Name: <br/><input type="text" name="name" />
                  </label>
                </p>
                <p className="contact-wrapper__text">
                  <label>
                    Your Email: <br/><input type="email" name="email" />
                  </label>
                </p>
                <p className="contact-wrapper__text">
                  <label>
                    Message: <br/><textarea name="message"></textarea>
                  </label>
                </p>
                <p className="contact-wrapper__text">
                  <button className="cta-btn cta-btn--about" type="submit">Send</button>
                </p>
              </form> */}
              <Form />
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
