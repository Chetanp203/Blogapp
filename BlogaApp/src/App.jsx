import { Button } from "@nextui-org/react"
import { useSelector, useDispatch } from 'react-redux'
import Register from "./Components/Register";
import Login from "./Components/Login";



function App() {
 const data = useSelector((state)=>state.Auth.isLoggedIn)
console.log(data);
  return (
    <>
   <h1 className='text-center text-2xl'>hello</h1>
   <Button color="primary">Click</Button>
   {/* <Register></Register> */}
   <Login></Login>
    </>
  )
}

export default App
