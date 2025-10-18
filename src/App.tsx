import './App.css'
import StartPage from './Pages/StartPage'
import LoginPage from './Pages/LoginPage'
import MainPage from './Pages/MainPage'
import SignupPage from './Pages/SignupPage'
import SignupResultPage from './Pages/SignupResultPage'



const App: React.FC = () => {

  return (
    <div className='shell'>
      {/* <StartPage></StartPage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <SignupPage></SignupPage> */}
      {/* <SignupResultPage></SignupResultPage> */}
      <MainPage></MainPage>
    </div>
  )
}

export default App
