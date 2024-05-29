"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function ReCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey: string | undefined =
    process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? "Not Defined"}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
