import classes from './Button.module.css'

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

  const appliedClasses = [classes.btn];
  const checkStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];
  const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
  appliedClasses.push(classes[checkStyle], classes[checkSize]);

  return (
    <button
      className={appliedClasses.join(' ')}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  )
}

export default Button;