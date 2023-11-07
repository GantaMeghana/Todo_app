import React,{useState} from 'react'
import TOdoFrom from './TodoFrom'

function todolist() {
        const [todos, setTodos] = useState([]);
        const addTodo = todo => {
            if (!todo.text || /^\s*$/.test(todo.text)) {
                return ;
            }
            const newTodos =[todo, ...todos];
            setTodos(newTodos)
            console.log(todo,...todos);

        };
    const completeTodo = id => {
        let updateTodos =todos.map(todo => {
         
        
    return (
        <div>
            <h1>What's the plan for Today?<h1>
            <TodoFrom onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} />
        </div>
    )
}

export default todolist;
