import React,{useState} from 'react;'
import TodoForm from './TodoForm';
import {RiCloserCircleline } from 'react-icons/ri;


function Todo () {
    const[edit, setEdit]= useState({
        id: null,
        value: ''
    })

    return todos.map((todos, completeTodo, removeTodo}) (
        <div 
            className= {todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
                <div key={todo.id} onClick={() => completeTodo.id)}>
                    {todo.text}
                </div>
                <div className='icons'>
                    <RiCloserCircleline>
                    <TiEdit onClick={() => removeTodo(todo.id)} 
                    className= 'delete.svg'
                </div>
         </div>
    )
        

}

export default Todo;
