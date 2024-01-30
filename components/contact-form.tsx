import React from "react";
import styles from "@/assets/scss/components/contact-form.module.scss";
import arrowRight from "@/assets/images/arrow-right-colored.svg";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className={styles.contact_form_wrapper}>
      <h2>{"Let's work together"}</h2>
      <p>
        Feel free to send me a contact request, and we can discuss how I can
        assist you or address any questions you may have.
      </p>
      <form action="">
        <label htmlFor="">Hi, my email is</label>
        <input type="email" placeholder="your@email" />
        <label htmlFor="">{"i'm writing about"}</label>
        <input type="text" placeholder="your subject" />
        <label htmlFor="">Looking forward to talk to you.</label>
        <button>
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
  );
};

export default ContactForm;
