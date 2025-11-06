import './Container.css'

type Prop = {
  children: React.ReactNode;
}

function Container({ children }: Prop) {
  return (
    <div className="app-layout">
      <div className="container">
        {children}
      </div>
    </div>
    
  )
}

export default Container;