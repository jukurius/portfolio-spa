import styles from "@/assets/scss/components/button-component.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  value: string;
  className?: string;
  action: () => void;
}

const ButtonComponent = ({
  disabled,
  value,
  className,
  action,
  ...props
}: ButtonProps) => {
  const handleButtonClick = () => {
    action();
  };

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${styles.reusable_button} ${
        className ? styles[className] : ""
      }`}
      onClick={handleButtonClick}
    >
      {value}
    </button>
  );
};

export default ButtonComponent;
