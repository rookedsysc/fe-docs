import ButtonType from "../types/ButtonType";

const Button = (props: ButtonType) => {
  return <button>{props.text}</button>;
};

export default Button;
