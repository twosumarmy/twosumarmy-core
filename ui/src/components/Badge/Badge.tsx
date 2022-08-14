import { DetailedHTMLProps } from "react";

export type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "primary"
  | "secondary"
  | "white";

export type BadgeProps = DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> & {
  /**
   * Set the variant of badge
   * @default "primary"
   */
  variant?: BadgeVariant;
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  style,
  variant = "primary",
  ...props
}) => {
  const render = (): React.ReactElement => {
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium 
        ${variantToBackgroundStyles[variant]} 
        ${variantToTextStyles[variant]} 
        ${style}`}
        {...props}
      >
        {children}
      </span>
    );
  };

  return render();
};

const variantToBackgroundStyles: Record<BadgeVariant, string> = {
  success: "bg-green-100",
  warning: "bg-yellow-100",
  danger: "bg-red-100",
  primary: "bg-blue-100",
  secondary: "bg-gray-100",
  white: "border border-gray-300",
};

const variantToTextStyles: Record<BadgeVariant, string> = {
  success: "text-green-800",
  warning: "text-yellow-800",
  danger: "text-red-800",
  primary: "text-blue-800",
  secondary: "text-gray-800",
  white: "",
};
