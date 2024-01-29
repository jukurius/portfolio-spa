import React from "react";
import styles from "@/assets/scss/components/contact-form.module.scss";
import arrowRight from "@/assets/images/arrow-right.svg";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className={styles.contact_form_wrapper}>
      <h2>{"Let's work together"}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        maiores, reiciendis minus cumque vero iste molestiae delectus libero
        labore illo.
      </p>
      <form action="">
        <label htmlFor="">Hi, my email is</label>
        <input type="email" placeholder="your@email" />
        <label htmlFor="">{"i'm writing about"}</label>
        <input type="text" placeholder="your subject" />
        <label htmlFor="">Looking forward to talk to you.</label>
        <button>
          Send{" "}
          <Image src={arrowRight} alt="Right arrow" width={60} height={60} />
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
