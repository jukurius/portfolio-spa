import React from "react";
import styles from "@/assets/scss/components/loader.module.scss";
import { useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

interface LoaderProps {
  setIsModalOpen: (value: boolean) => void;
  isLoading: boolean;
}

const Loader = ({ setIsModalOpen, isLoading }: LoaderProps) => {
  return (
    <dialog className={styles.modal_wrapper}>
      <div className={styles.modal_container}>
        {isLoading ? (
          <LoaderContent />
        ) : (
          <ResultContent setIsModalOpen={setIsModalOpen} />
        )}
      </div>
    </dialog>
  );
};

const LoaderContent = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader_text_content}>
        <h2>Your Email is Being Sent!</h2>
        <p>
          Your email is currently being processed and will be sent shortly.
          Please do not close this window or navigate away until the process is
          complete.
        </p>
      </div>
      <div className={styles.spinner}></div>
    </div>
  );
};

interface ResultContentProps {
  setIsModalOpen: (value: boolean) => void;
}

const ResultContent = ({ setIsModalOpen }: ResultContentProps) => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.result_container}>
      <div className={styles.result_text_content}>
        <h2>Success!</h2>
        <p>Your email has been sent successfully.</p>
      </div>
      {modal ? (
        <Link
          className={styles.result_button}
          onClick={handleModalClose}
          href={pathname}
        >
          Close
        </Link>
      ) : (
        <button className={styles.result_button} onClick={handleModalClose}>
          Close
        </button>
      )}
    </div>
  );
};

interface LoaderModalProps {
  setIsModalOpen: (value: boolean) => void;
  isLoading: boolean;
}

const LoaderModal = ({ setIsModalOpen, isLoading }: LoaderModalProps) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Loader setIsModalOpen={setIsModalOpen} isLoading={isLoading} />
    </Suspense>
  );
};

export default LoaderModal;
