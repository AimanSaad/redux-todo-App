import { useDispatch, useSelector} from 'react-redux'
import {addTodo, deleteAll} from '../actions';
import  React,{useState} from 'react'
import List from './list'
import { v4 as uuidv4 } from 'uuid';


const Todo = () => {
     const [inputData, setInputData] = useState();
    
     const list = useSelector ((val) =>{
         return val.todoReducer.todoList
     }) 
     const dispatch= useDispatch();
     const handleTodo = (task) => {
         try {
             if (!task) throw "Empty Field"
              const payload = {
                  title: task,
                  id:uuidv4()
              }
              const action = addTodo(payload);
              dispatch(action);
              console.log("payload", payload)
         }
         catch (error) {
             console.log("error", error)
         }
     }
     console.log ("list",list)
    return (
        <div>
            <div>
                <input value={inputData}onChange={(e) => setInputData(e.target.value)} />
                <button onClick={()=>handleTodo(inputData)}>
                         Add ToDo
                </button>
                <br/>
                <button onClick={()=>dispatch(deleteAll)}>
                         Delete All
                </button>
            </div>
            {
                list.map((item)=> {
                    return (
                        <List data={item}/>
                    )
                })
            }
        </div>
    )
}

export default Todo