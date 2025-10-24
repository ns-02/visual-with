import './App.css'
import StartPage from './pages/StartPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SignupPage from './pages/SignupPage'
import SignupResultPage from './pages/SignupResultPage'



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
