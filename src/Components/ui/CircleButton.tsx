import "./CircleButton.css"

type Prop = {
  children: React.ReactNode;
  onClick: VoidFunction;
}

function CircleButton({ children, onClick }: Prop) {
  return (
    <button className="circle-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default CircleButton;