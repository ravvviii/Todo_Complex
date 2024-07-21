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
                <button 
                
                className='bg-green-600 text-white px-3 py-1 rounded flex items-center'
                >



                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  width="25" 
                  height="25" >
                  <path d="M20.548 3.452a1.542 1.542 0 0 1 0 2.182l-7.636 7.636-3.273 1.091 1.091-3.273 7.636-7.636a1.542 1.542 0 0 1 2.182 0zM4 21h15a1 1 0 0 0 1-1v-8a1 1 0 0 0-2 0v7H5V6h7a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1z"/></svg>
                  </button>



                  <button
                  
                  className='bg-blue-600 text-white px-3 py-1 rounded flex items-center'
                  
                  >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="0px" 
                    y="0px" 
                    width="25" 
                    height="25" 
                    viewBox="0 0 30 30"
                      style={{fill:'#FA5252'}}>
                      <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                    </svg>
                    
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
