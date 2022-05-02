import { useState, useEffect } from 'react'
import './App.css'
import UserPage from './component/userPage/userPage'
import { supabase } from './client'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    checkUser()

    window.addEventListener('hashchange', function () {
      checkUser()
    })
  }, [])
  async function checkUser() {
    const user = supabase.auth.user()
    setUser(user)
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github',
    })
  }
  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
  }

  if (user) {
    return (
      <div className="App">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UserPage />
          <div className="">
            <h3
              style={{
                color: 'green',
              }}
            >
              Hello, {user.email}
            </h3>
            <button
              onClick={signOut}
              style={{
                background: 'red',
                border: 'none',
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Hello, please sign in!</h1>
      <button
        style={{
          background: 'green',
          color: '#ffffff',
        }}
        onClick={signInWithGithub}
      >
        Sign In
      </button>
    </div>
  )
}

export default App
