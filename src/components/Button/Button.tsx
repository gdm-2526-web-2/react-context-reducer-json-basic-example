import { Link } from "react-router";

type ButtonProps = {
  children: React.ReactNode;
  link: string;
  type?: "secondary" | "primary";
};

const Button = ({ children, link, type = "primary" }: ButtonProps) => {
  return (
    <Link role="button" to={link} className={`btn ${type}`}>
      {children}
    </Link>
  );
};

export default Button;
