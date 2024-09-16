//Routing code---
/*import { Suspense, lazy } from "react";
import { BrowserRouter, Routes,Route, useNavigate } from "react-router-dom"
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback = {"loading..."}><Dashboard /></Suspense>}/>
          <Route path="/" element={<Suspense fallback = {"loading..."}><Landing /></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={() => {
          navigate("/")
        }}>
        Landing page  
      </button>
    <button onClick={() => {
          navigate("/dashboard")
        }}>Dashboard
      </button>
  </div>
}*/


//Prop drilling 

/*function App(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount}/>
    </div>
  )  
}

function Count({count, setCount}){
  return(
    <div>
      {count}
      <Button count={count} setCount={setCount} />
    </div>
  )
}



function Button({count, setCount}) {
  return(
    <div>
      <button onClick={() => {
      setCount(count +1)}}>Increase</button>
      <button onClick={() => {
      setCount(count-1)}}>Decrease</button>
    </div>
  )
}
export default <App></App>*/

//Api context
import { useContext, useState} from "react";
import { CountContext } from "./context";
function App(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count count={count} setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )  
}

function Count({count, setCount}){
  return(
    <div>
      <CountRenderer />
      <Button setCount={setCount} />
    </div>
  )
}

function CountRenderer(){
  const count = useContext(CountContext);
  return(
    <div>
      {count}
    </div>
  )
}

function Button({setCount}) {
  const count = useContext(CountContext);
  return(
    <div>
      <button onClick={() => {
      setCount(count +1)}}>Increase</button>
      <button onClick={() => {
      setCount(count-1)}}>Decrease</button>
    </div>
  )
}
export default App