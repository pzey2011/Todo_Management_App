import { FaPlus } from "react-icons/fa";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  activated: boolean | undefined;
};
const Button = ({ activated, type }: Props) => {
  return (
    <button disabled={!activated} type={type}>
      <FaPlus />
    </button>
  );
};

export default Button;
