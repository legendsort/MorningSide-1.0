import React, { useState, useRef, FormEventHandler } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const form: any = useRef();

  const handleSubmit = (e: any): any => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "service_4lc63o8",
        "template_upd8p7b",
        form.current,
        "WpcdHKXte2Drc_Q_u"
      )
      .then(
        (result: unknown) => {
          form.current.reset();
          toast.success("Email sent successfully!"); // Show success toast notification
          setStatus("Submit");
        },
        (error: unknown) => {
          toast.error("There was an error sending the email."); // Show error toast notification
          setStatus("Submit");
        }
      );
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 " style={{ width: "80%" }}>
        <div className="py-8 lg:py-16 px-4 mx-auto w-full">
          <h2 className="mb-10 text-2xl font-bold tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>

          <form
            ref={form}
            action="#"
            className="space-y-8 text-xl"
            onSubmit={handleSubmit}
          >
            <div className="pb-10">
              <label
                htmlFor="email"
                className="block mb-5 font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-5  sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="pb-10">
              <label
                htmlFor="subject"
                className="block mb-5 font-medium text-gray-900 dark:text-gray-300 mb-5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block p-5 sm:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2 mb-10">
              <label
                htmlFor="message"
                className="block mb-2 sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block p-5 sm:p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className=" flex justify-center">
              <button
                className="theme-btn"
                disabled={status === "Sending..."}
              >
                {status}
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
