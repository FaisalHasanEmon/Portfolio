import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Bounce } from "react-toastify";

const Contact = () => {
  const notifySuccess = (message) => {
    toast.success(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const notifyError = (message) => {
    toast.error(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

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
          notifySuccess("Thanks For Your Email 😊");
          e.target.reset();
        },
        (error) => {
          notifyError("Failed to email 😥");
        }
      );
  };

  return (
    <div className="min-h-[calc(100vh-65px)]">
      <div className="w-full">
        <h1 className="text-4xl lg:text-5xl font-bold  mb-10 text-left">
          {"<contact me/>"}
        </h1>

        <div className="flex flex-col justify-center items-end lg:flex-row lg:justify-center lg:items-start gap-2 w-full">
          <figure className="w-full  lg:w-1/2  bg-base-200 overflow-clip rounded-md ">
            <img
              src="/giphy.gif"
              alt="Email GIF"
              className="object-cover w-full"
            />
          </figure>
          <div className="w-full lg:w-1/2">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="card w-full card-md  shadow-base-200 shadow-lg backdrop-blur-2xl bg-white/2 p-8 *:w-full"
            >
              <label className="fieldset-label mt-5">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input mt-1"
                name="user_name"
                required
              />

              <label className="fieldset-label mt-5">Your Email</label>
              <input
                type="email"
                className="input mt-1"
                placeholder="Email"
                name="user_email"
                required
              />

              <label className="fieldset-label mt-5">Message</label>
              <textarea
                rows={6}
                className="textarea mt-1 "
                placeholder="Your Message"
                name="message"
                required
              />
              <div className="w-full">
                <input
                  className="btn mt-5 lg:mt-9 w-full"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
