import ContactForm from "@/components/contact-form/contact-form";
import styles from "./index.module.scss";
import Hero from "./hero";

const Index = () => {
  return (
    <div className={styles.main}>
      <Hero />
      <ContactForm />
    </div>
  );
};

export default Index;
