import './Layouts.css'

type Prop = {
  children: React.ReactNode;
}

function MainBody({ children }: Prop) {
  return (
    <div className='body'>
      {children}
    </div>
  )
}

export default MainBody;