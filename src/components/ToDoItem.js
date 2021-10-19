import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {Button} from "antd";
import {deleteToDo,updateToDo} from "../redux/actions/todoActions"

const ToDoItem=({todo})=>{
const [edit,setEdit]=useState(false);
const [name,setName]=useState(todo.name)
    const dispatch=useDispatch();
    return (
        <>
        <div className="row mx-2 align-items-center">
            <div>#{Math.trunc(todo.id * 10)}</div>
            <div className="col-8">
                {edit?(<input type="text"
                onChange={(e)=>setName(e.target.value)}
                className="form-control"
                value={name}/>):
                (
                <h4>{todo.name}</h4>
                )}
            </div>
           <Button onClick={()=>{
               if(edit){
                   setName(todo.name)
                   dispatch(updateToDo({...todo,
                    name:name
                }))
               }
               setEdit(!edit)}} type="primary" className="mr-2">

{edit?"Update":"Edit"}

           </Button>
            <Button type="primary" 
            onClick={()=>dispatch(deleteToDo({id:todo.id}))}
            danger></Button>
            
            </div>
       
            
         </>
    )
}

export default ToDoItem
