interface Props{
    children: string;
    color?: string; // An opcional propriety, you can put operator like | to only accept some values
    onClick: () => void;
}
const Button = ({ children, onClick, color = 'secondary' }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={ onClick }> 
      { children } 
    </button>
  )
}

export default Button