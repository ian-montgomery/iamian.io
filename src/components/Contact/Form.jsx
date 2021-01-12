import React from 'react';
import { navigate } from 'gatsby-link'
import Thanks from '../Contact/Thanks'

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default function Form() {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
  
    return (
        <form
          name="contact"
          method="post"
          action='/thanks/'
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
          <p className="contact-wrapper__text">
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p className="contact-wrapper__text">
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p className="contact-wrapper__text">
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <p className="contact-wrapper__text">
            <button className="cta-btn cta-btn--about" type="submit">Send</button>
          </p>
        </form>
    )
  }
  