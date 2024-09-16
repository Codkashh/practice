import { useEffect, useState } from 'react'
import axios from "axios";


function App() {
  const [todos, setTodos] = useState([]); 

  useEffect(() => {
    const res = axios.get("https://sum-server.100xdevs.com/todos").then(function(response) {
      setTodos(response.data.todos)
    } )
  },[]);

  return (
    <>
      {todos.map(todo => <Todo title>)}
    </>
  )
}

export default App
