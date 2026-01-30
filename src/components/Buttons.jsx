import CartIcon from "../assets/images/icon-add-to-cart.svg?react";
import RemoveIcon from "../assets/images/icon-remove-item.svg?react";
import AddIcon from "../assets/images/icon-increment-quantity.svg?react";
import SubtractIcon from "../assets/images/icon-decrement-quantity.svg?react";
import { Text } from "../components/Text";

export function Buttons({
  children,
  variant = "default",
  onClick,
  count,
  onIncrement,
  onDecrement,
  className="",
  ...props
})
{
  const base ="flex flex-row justify-center items-center transition-all duration-300 hover:cursor-pointer group";
  const variants = {
    default:
      "gap-2 py-4 px-6 w-[160px] h-[53px] rounded-full bg-preset-red text-white hover:bg-red-hover",

    remove:
      "border border-preset-rose-400 text-preset-rose-400 hover:border-preset-rose-900 hover:text-preset-rose-900 w-5 h-5 rounded-full",

    subtract:
      "border border-white text-white hover:bg-white hover:text-preset-red w-5 h-5 rounded-full",

    add: "border border-white text-white hover:bg-white hover:text-preset-red w-5 h-5 rounded-full",

    cartadd:
      "gap-2 p-3 w-[160px] h-[44px] bg-white text-black border border-preset-rose-400 rounded-full hover:text-preset-red hover:border-preset-red",

    stepper:
      "flex justify-between items-center p-3 w-[160px] h-[44px] rounded-full bg-preset-red text-white hover:bg-red-hover",
  };

  const icons = {
    subtract: <SubtractIcon />,
    add: <AddIcon />,
    remove: <RemoveIcon className="w-3 h-3" />,
    cartadd: <CartIcon className="w-5 h-5" />,
  };

  if (variant === "stepper") {
    const circleBtn =
      "flex items-center justify-center w-5 h-5 border border-white rounded-full transition-colors hover:bg-white hover:text-preset-red group";

    return (
      <div className={`flex items-center ${variants.stepper}`}>
        <button type="button" onClick={onDecrement} className={circleBtn}>
          <SubtractIcon className="w-3 h-3" />
        </button>

        <Text>{count}</Text>
        <button type="button"  onClick={onIncrement} className={circleBtn}>
          <AddIcon className="w-3 h-3" />
        </button>
      </div>
    );
  }

  const buttonClasses = `${base} ${variants[variant] || variants.default} ${className}`;

  return (
    <button type="button" {...props} onClick={onClick} className={buttonClasses}>
      {icons[variant]}
      {children}
    </button>
  );
}
