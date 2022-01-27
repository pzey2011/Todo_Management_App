type Props = {
  type: "button" | "submit" | "reset" | undefined;
  activated: boolean | undefined;
};
const Button = ({ activated, type }: Props) => {
  return (
    <button disabled={!activated} type={type}>
      Add
    </button>
  );
};

export default Button;
