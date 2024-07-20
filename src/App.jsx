import { useState } from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import './index.css';





function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
    <div className="bg-gray-600 min-h-screen flex flex-col">
        <div className="flex justify-center">
          <h2 className="text-white text-center mt-10 text-3xl font-bold">Todo</h2>
        </div>
        <AddTodo setTodo={setTodo} setTodos={setTodos} todo={todo} todos={todos}/>
        <Todo todos={todos}/>

        
      </div>
      
    </>
  )
}

export default App
