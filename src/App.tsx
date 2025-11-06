import { Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SignupPage from './pages/SignupPage'
import SignupResultPage from './pages/SignupResultPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

const App: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signup-result" element={<SignupResultPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  )
}

export default App
