"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/assets/scss/components/modal.module.scss";
import ContactForm from "./contact-form";
import close from "@/assets/images/close.svg";
import Image from "next/image";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className={styles.modal_wrapper}>
          <div className={styles.modal_container}>
            <ContactForm />
          </div>
          <Link className={styles.modal_close} href={pathname}>
            <Image src={close} alt="X icon" width={40} height={40} />
          </Link>
        </dialog>
      )}
    </>
  );
}

export default Modal;
