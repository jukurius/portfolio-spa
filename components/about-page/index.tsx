import ContactForm from "@/components/contact-form";
import styles from "./index.module.scss";
import TimeLine from "../time-line";
import Hobbies from "../hobbies";

const Index = () => {
  return (
    <div className={styles.main}>
      <TimeLine />
      <Hobbies />
      <ContactForm />
    </div>
  );
};

export default Index;
