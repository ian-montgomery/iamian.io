import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';



const Thanks = () => {

  return (
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
              <p className="contact-wrapper__text">
                  Thanks for sending me a message! I will get back to you soon. 
              </p>
            </div>
            </Fade>
      </Container>
  )
}

export default Thanks