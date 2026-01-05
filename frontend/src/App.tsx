import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignupPage from './pages/Users/SignupPage'
import LoginPage from './pages/Users/LoginPage'
import ForgotPassword from './pages/Users/ForgotPassword'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
        </>
      } />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App

