import "./IconButton.css"

type Prop = {
  children: React.ReactNode;
  onClick: VoidFunction;
}

function IconButton({ children, onClick }: Prop) {
  return (
    <button className="icon-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton;