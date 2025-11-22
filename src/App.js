import React, { useState } from 'react'
import LoginScreen from './pages/login/LoginScreen'
import SignUpScreen from './pages/sign/SignUpScreen'

const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>

      <div>
        {
          isLogin ? <LoginScreen /> : <SignUpScreen />
        }

      </div>
    </>
  )
}

export default App