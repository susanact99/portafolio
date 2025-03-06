import React from 'react'
import emailjs from 'emailjs-com'
import "./contact.css"

export function Contact(props) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const SERVICE_ID = 'service_eqoq632';
    const TEMPLATE_ID = 'template_4uxl0y5';
    const USER_ID = '-GzGEHQC_Ao5I8ijX';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: '¡Message delivered!',
          text: 'Your message has been delivered succesfuly',
          icon: 'success',
          confirmButtonText: 'Accept',
          timer: 3000,
          showConfirmButton: true,
          background: 'rgb(5, 0, 8)',
          toast: true,
        });
        event.target.reset();
      }, (error) => {
        console.error(error.text);
        alert('No se pudo enviar el mensaje.');
      });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get in Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything!</h3>
          <p className="contact_details">Send me an email.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input type="text"
                className="contact_form-input"
                placeholder="Insert your name"
                name='from_name' />
            </div>

            <div className="contact_form-div">
              <input type="email"
                className="contact_form-input"
                placeholder="Insert your email"
                name='reply_to' required />
            </div>
          </div>

          <div className="contact_form-div">
            <input type="text"
              className="contact_form-input"
              placeholder="Insert your subject"
              name='subject' />
          </div>

          <div className="contact_form-div">
            <textarea cols="30"
              rows="10"
              className="contact_form-input"
              placeholder='Write your message'
              name='message'
              required
            ></textarea>
          </div>

          <button type='submit' className="btn">Send Message</button>

        </form>
      </div>
    </section>
  )
}
