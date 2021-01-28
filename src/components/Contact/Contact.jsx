import React, { useContext, useState, useEffect  } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Form from '../Contact/Form';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta1, btnEmail, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade top duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta1}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--about"
              href={email ? `mailto:${email}` : 'https://www.linkedin.com/in/ian-montgomery/'}
            >
              {btnEmail || "Let's Talk"}
            </a>
          </div>
        </Fade>
        <Fade bottom duration={1000} delay={1600} distance="30px">
          <Form />
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
