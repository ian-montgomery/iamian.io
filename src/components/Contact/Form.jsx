import React, { useContext } from 'react';
import { navigate } from 'gatsby-link';
import PortfolioContext from '../../context/context';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function Form() {
  const [state, setState] = React.useState({});
  const { contact } = useContext(PortfolioContext);
  const { cta2, btnContact } = contact;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
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

  return (
    <div className="contact-wrapper">
      <p className="contact-wrapper__text">{cta2}</p>
      <form
        name="contact"
        method="post"
        action="thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label className="contact-wrapper__text">
            Your name:
            <br />
            <input type="text" name="name" required onChange={handleChange} />
          </label>
        </p>
        <p>
          <label className="contact-wrapper__text">
            Your email:
            <br />
            <input type="email" name="email" required onChange={handleChange} />
          </label>
        </p>
        <p>
          <label className="contact-wrapper__text">
            Message:
            <br />
            <textarea name="message" required onChange={handleChange} />
          </label>
        </p>
        <p className="contact-wrapper__text">
          <button className="cta-btn cta-btn--contact" type="submit">
            {btnContact}
          </button>
        </p>
      </form>
    </div>
  );
}
