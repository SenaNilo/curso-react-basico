import { ReactNode } from "react";

interface Props{
    children: ReactNode;
    onClose: () => void;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-dark alert-dismissible fade show">
        { props.children }
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={ props.onClose }></button>
    </div>
  )
}

export default Alert