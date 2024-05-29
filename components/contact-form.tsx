"use client";
import React, { useState } from "react";
import styles from "@/assets/scss/components/contact-form.module.scss";
import arrowRight from "@/assets/images/arrow-right-colored.svg";
import Image from "next/image";
import Loader from "./Loader";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const ContactForm = () => {
  const [result, setResult] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sender, setSender] = useState({ email: "", subject: "" });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const sendEmail = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderEmail: sender.email,
        senderSubject: sender.subject,
      }),
    })
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((error) => setResult(error))
      .finally(() => {
        setIsLoading(false);
        setSender({ email: "", subject: "" });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSender({ ...sender, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("contact");
    console.log("gRecaptchaToken:", gRecaptchaToken);
    const response = await fetch("/api/recaptcha", {
      method: "POST",
      body: JSON.stringify({ gRecaptchaToken }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (data.success) {
      console.log("Recaptcha verified successfully!");
      sendEmail();
    } else {
      console.log("Recaptcha verification failed!");
    }
  };

  return (
    <>
      {isModalOpen ? (
        <Loader setIsModalOpen={setIsModalOpen} isLoading={isLoading} />
      ) : (
        <section className={styles.contact_form_wrapper}>
          <h2>{"Let's work together"}</h2>
          <p>
            Feel free to send me a contact request, and we can discuss how I can
            assist you or address any questions you may have.
          </p>
          <form action="">
            <label htmlFor="">Hi, my email is</label>
            <input
              name="email"
              type="email"
              placeholder="your@email"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="">{"i'm writing about"}</label>
            <input
              name="subject"
              type="text"
              placeholder="your subject"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="">Looking forward to talk to you.</label>
            <button onClick={(e) => handleSubmit(e)}>
              Send{" "}
              <Image
                className={styles.submit_arrow}
                src={arrowRight}
                alt="Right arrow"
                width={60}
                height={60}
              />
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default ContactForm;
