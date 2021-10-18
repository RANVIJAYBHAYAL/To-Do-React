import React from "react";

import {useSelector} from "react-redux";

 import ToDoItem from './ToDoItem';


const ToDoList=()=>{
let todos=useSelector((state)=>state.app);
console.log("todos",todos);
return(
<div className="my-3">
{todos.map((todo)=>{
    return <ToDoItem key={todo.id} todo={todo}/>
})}

</div>)


}
export default ToDoList