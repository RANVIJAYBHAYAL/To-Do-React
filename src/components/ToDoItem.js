import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Button} from "antd";
import {deleteToDo} from "../redux/actions/todoActions"

const ToDoItem=({todo})=>{

    const dispatch=useDispatch();
    return (
        <>
        <div className="row mx-2 align-items-center">
            <div>#{Math.trunc(todo.id * 10)}</div>
            <div className="col-8">
                <h4>{todo.name}</h4>
            </div>
           
            <Button type="primary" 
            onClick={()=>dispatch(deleteToDo({id:todo.id}))}
            danger></Button>
            
            </div>
       
            
         </>
    )
}

export default ToDoItem
