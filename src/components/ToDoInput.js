import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {addToDo} from "../redux/actions/todoActions";
import { Button,Input } from "antd";


const ToDoInput=()=>{

const [name,setName]=useState("");
let dispatch=useDispatch();
const handleAddToDo=()=>{
    dispatch(addToDo({
        id:Math.random(),
        name,
    }))
    setName("")
}

return(
<div className="row m-2">
<Input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="col-8"/>
<Button type="primary" 
onClick={handleAddToDo} 
size="middle" 
style={{width:"135px"}}>Add</Button>
</div>
)


};

export default ToDoInput;