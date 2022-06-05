import React, { useRef } from 'react';
import "../componets/css/contact.css"

import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';

import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    let message = "Let's get in touch!";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x8bpmil', 'template_s7j2z97', form.current, 'WIOnn-FJddwHoa_i9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(message)
    };

    return (
        <section className='holds-contact-section'>

            <h1 className='intro-big' id='contact'>Let's talk!</h1>
            <section className='holds-contact-section-row'>
                <div className="map-wrap margin-side">
                    <div id='map'>
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            frameBorder={0}
                            marginHeight={0}
                            marginWidth={0}
                            style={{ filter: "opacity(0.7)" }}
                            src="https://www.google.com/maps/embed/v1/place?q=32824+orlando+florida&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        />
                    </div>
                </div>
                <div className='div-padding'></div>
                <div className='contact-form-right'>
                    <h3 className='sub-intro-med'>Contact me</h3>
            
                    <form name='contact' className='contact-form-input' ref={form} onSubmit={sendEmail}>
                        <div className="contact-form-labels">
                            <label htmlFor="name" className='para-text-small-form'>
                                <AiOutlineUser /> Name
                            </label>
                            <input type="text" id="name" name="name" className="input-field-form" style={{ fontSize: '18px' }} />
                        </div>
                        <div className='div-padding-contact'></div>
                        <div className="contact-form-labels">
                            <label htmlFor="email" className='para-text-small-form'>
                                <AiOutlineMail /> Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-field-form"
                                style={{ fontSize: '18px' }} />
                        </div>
                        <div className='div-padding-contact'></div>
                        <div className="contact-form-labels">
                            <label htmlFor="message" className='para-text-small-form' name="Message">
                                <AiOutlineMessage /> Message
                            </label>
                            <textarea className="contact-form-labels-textarea input-field-form" name='message' style={{ fontSize: '18px' }} />
                        </div>
                        <button type="submit" className="contact-form-labels-submit">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default Contact;