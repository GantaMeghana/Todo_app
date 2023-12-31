import React,{useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleChange = e=> {
        setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        
        props.onsubmit({{
            id Math.floor(Math.random()*10000),
            text input
        });
        setInput(' ');
    };


    return (
        <form className="todo-form">
            <input type="text 
                   placeholder="Add a todo" 
                   value={input}
                   name='text'
                   className='todo-input'
                   onChange=(handleChange}
            />
            <button className='todo-button'>Add todo</button>
            
        </form


        </div>
    )
} 
export default TodoForm
