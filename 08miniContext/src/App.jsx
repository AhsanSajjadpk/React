import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./components/Login"
import Admin from "./components/Admin"



function App() {


  return (
    <UserContextProvider>

      <Login />
      <Profile />
      <Admin/>

    </UserContextProvider>
  )
}

export default App
