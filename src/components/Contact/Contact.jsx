import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const YOUR_SERVICE_ID = import.meta.env.VITE_service_id;
  const YOUR_PUBLIC_KEY = import.meta.env.VITE_public_key;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_template_id;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="">
      <label className="fieldset-label mt-5">Your Name</label>
      <input
        type="text"
        placeholder="Your Name"
        className="input mt-1"
        name="user_name"
      />

      <label className="fieldset-label mt-5">Your Email</label>
      <input
        type="email"
        className="input mt-1"
        placeholder="Email"
        name="user_email"
      />

      <label className="fieldset-label mt-5">Message</label>
      <textarea
        className="textarea mt-1"
        placeholder="Your Message"
        name="message"
      />
      <div>
        <input className="btn mt-5" type="submit" value="Send" />
      </div>
    </form>
  );
};
export default Contact;
