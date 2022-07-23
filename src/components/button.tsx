import React from "react"

/* Defining the props that the Button component will take. */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of the button.
   */
  type: "button" | "submit" | "reset"

  /**
   * Button label/content
   */
  children: React.ReactNode

  /**
   * Button styles and props
   */
  styles?: object

  /**
   * button classes
   */
  classes?: string

}

const Button = ({
  type,
  children,
  styles,
  disabled,
  classes,
  onClick,
  onMouseOver,

  ...props
}: ButtonProps) => {
  const defStyles = {
    paddingInline: "var(--btn-px, 1.4rem)",
    paddingBlock: "var(--btn-py, 0.8rem)",
    display: "var(--btn-dsp, inline-flex)",
    placeItems: "var(--btn-place, center)",
    justifyContent: "var(--btn-justify, center)",
    cursor: "var(--btn-cursor, pointer)",
    border: "var(--btn-border, none)",
    color: "var(--btn-color, currentColor)",
    backgroundColor: "var(--btn-bg, lightgray)",
  }

 /**
  * If the button is not disabled, then call the onClick function
  */
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!disabled) {
      onClick?.(e)
    }
  }


/* Returning a button element. */
  return (
    <button
      type={type}
      onClick={handleClick}
      style={{...defStyles, ...styles }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
