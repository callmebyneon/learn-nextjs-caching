type TVariant = "flat" | "contained" | "outline";
type TButtonElementProps = React.ComponentProps<"button"> & {
  variant?: TVariant;
};

const style = {
  flat: "text-teal-700 bg-white hover:bg-teal-100",
  contained: "text-white bg-teal-500 hover:bg-teal-700",
  outline: "text-teal-500 bg-white border border-teal-500 hover:bg-teal-100",
};

const Button = (props: TButtonElementProps) => {
  const { children, variant = "contained", ...restProps } = props;
  return (
    <>
      <button
        {...restProps}
        className={`inline-block px-4 py-2 transition rounded-md ${style[variant]}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
