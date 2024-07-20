// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit'; // Import EditIcon for Modify action
import React from 'react';

function Todo({ todos }) {
  return (
    <>
      <div className='flex flex-col w-full min-h-screen'>
        <div className='flex flex-col justify-center items-center mt-10 max-w-[700px] mx-auto'>
          {todos.map((todo) => {
            return (
              <div key={todo.id} className='mb-4 p-2 border border-gray-300 rounded mt-1 min-w-[730px] flex flex-row items-center'>
                <div className='flex flex-col'>
                  <div className='text-white font-semibold text-xl ml-3'>{todo.text}</div>
                  <div className='text-white font-normal text-xs ml-3'>{todo.date}</div>
                </div>

                <div className='ml-auto flex space-x-2'>
                  <button className='bg-blue-600 text-white px-3 py-1 rounded flex items-center'>
                    {/* <DeleteIcon className='mr-1' /> Include the Delete icon */}
                    Delete
                  </button>
                  <button className='bg-green-600 text-white px-3 py-1 rounded flex items-center'>
                    {/* <EditIcon className='mr-1' /> Include the Edit icon */}
                    Modify
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
