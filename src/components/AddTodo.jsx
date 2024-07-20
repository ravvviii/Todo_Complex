import React, { useEffect } from 'react';

function AddTodo({setTodos, setTodo, todo, todos}) {
    // const [todo, setTodo] = useState('')
    // const [todos, setTodos] = useState([])


    function formatDate(date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
      }

    const addTodo = ()=>{
        if(todo.trim()){
            const newTodos = {
                id:Date.now(),
                text: todo,
                date: formatDate(new Date()), 

            }
            setTodos(prev=> [...prev, newTodos]);
            setTodo('')
        }
        console.log(todos);

    }



    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent form submission if inside a form
          addTodo(); // Call addTodo function
        }
      };

    useEffect(() => {
        console.log(todos); // Logs todos after the state has been updated
      }, [todos]); 
  return (
   <>
   <div className='flex flex-col'>

   <div className=' justify-center flex min-w-7 content-center'>


    <input
    value={todo}
    placeholder='Enter Your Todo'
    type='text'
    className='w-[600px] p-2  border border-gray-300 mt-10 rounded-md '
    onChange={(e)=>setTodo(e.target.value)}
    onKeyDown={handleKeyDown} // Attach keydown event handler enetr key ke liye

    />


    <button
    className=' W-[80px] h-10 bg-red-500 mt-10 px-4 ml-5 rounded-lg font-semibold	'
    onClick={addTodo}
    >
        Add Todo
    </button>


    

    </div>
   </div>
   </>
  )
}
 
export default AddTodo