import { cn } from "@/lib/cn";
import React from "react";
import classes from "./Button.module.css";

type Props = {
  /**
   * class for component
   */
  className?: string;
};

/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
 */
const Button: React.FC<Props> = ({ className }) => {
  return (
    <button className={cn(classes.primary, "btn-class", className)}>
      Button
    </button>
  );
};

export default Button;
