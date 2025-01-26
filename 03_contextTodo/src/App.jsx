import { useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos( (prev) => [
      ...prev,
      {
        id: Date.now(),
        ...todo
      }
    ])
  }

  const updateTodo = (id, todo) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? todo : prevTodo ))
  }

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
  }

  const useEffect = (() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }

  }, [])

  useEffect( () => {
    localStorage.getItem("todos", JSON.stringify(todos))
  }, [todos])
  

  return (
    <>
      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}   
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
      </TodoProvider>
    </>
  )
}

export default App
