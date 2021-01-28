import React, { useContext, useState } from 'react';
import { navigate } from 'gatsby-link';
import PortfolioContext from '../../context/context';
import classNames from 'classnames'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Form = () => {
  const [state, setState] = useState({});
  const { contact } = useContext(PortfolioContext);
  const { cta2, btnContact } = contact;
  

  const handleChange = (e) => {
    console.log(e.target.name)
    setState({ ...state, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  const inputClass = (name) => classNames({
    'input2': true,
    'has-val': state[name]
  })

  return (
    <section id="form" test={console.log({state})}>
      <p className="contact-wrapper__text">{cta2}</p>
      <div className="wrap-contact2">
        <form
          className="contact2-form"
          name="contact"
          method="post"
          action="thanks"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <span hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </span>
          <div className="wrap-input2">
            <input className={inputClass('name')} type="text" name="name" required  onChange={handleChange} />
            <span className="focus-input2" data-placeholder="Name"></span>
          </div>

          <div className="wrap-input2">
            <input className={inputClass('email')} type="text" name="email" required  onChange={handleChange}/>
            <span className="focus-input2" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input2">
            <textarea className={inputClass('message')} name="message" required  onChange={handleChange}></textarea>
            <span className="focus-input2" data-placeholder="Message"></span>
          </div>
          <div className="contact-wrapper__text">
            <button className="cta-btn cta-btn--contact" type="submit">
              {btnContact}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
