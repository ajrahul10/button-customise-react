import './Button.css'

const STYLE = [
  "primary",
  "secondary",
  "tertiary"
]

const SIZE = [
  "regular",
  "medium",
  "large"
]

const Button = ({
  children,
  onClick,
  type,
  buttonStyle,
  buttonSize
}) => {

  const checkStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button
      className={`btn ${checkStyle} ${checkSize}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}

export default Button;