import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      <button className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
      <button
        className={[styles.buttonColor, styles.addPadding].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
