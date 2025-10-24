import './Layouts.css'

type Prop = {
  children: React.ReactNode;
}

function RightSection({ children }: Prop) {
  return (
    <section className="rightsection">
      {children}
    </section>
  )
}

export default RightSection;