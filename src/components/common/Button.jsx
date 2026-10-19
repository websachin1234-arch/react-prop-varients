import { Link } from "react-router-dom";
const styles = {
  primary: "max-w-[202px] w-full h-13 flex items-center justify-center text-white text-base font-normal leading-[100%] border border-solid border-white rounded-[114.9px] mt-7.5",
  secondary: "max-w-[202px] w-full h-13 bg-white text-black flex items-center justify-center text-base font-normal leading-[100%] border border-solid border-white rounded-[114.9px] mt-7.5"
}

const Button = ({ children, to, variant = "primary" }) => {
  return (
    <Link to={to} className={styles[variant]}>
      {children}
    </Link>
  );
};

export default Button