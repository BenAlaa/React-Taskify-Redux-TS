import {CREATE_TASK,EDIT_TASK,DELETE_TASK,TasksActionTypes} from '../Actions/TasksActionsTypes';
import {ITasksState, ITask} from '../../Types/AppTypes';


const initialState:ITasksState={
    tasks:[{id:0,isCompleted:false,description:"",categoryId:0,userId:0}],
}


export default function tasksReducer(state = initialState, action :TasksActionTypes):ITasksState{
    // const {id} = action.payload;
    // newTask.id=state.tasks.length+1;
    switch(action.type){

        case CREATE_TASK:{
            const newTask = action.payload;
            return{
                tasks:[...state.tasks, newTask]
            }
        }
        case EDIT_TASK:{
            const index =state.tasks.findIndex(t => t.id === action.payload.id);
            const updatedTask = action.payload;
            const tasks:ITask[] ={...state.tasks.slice(0,index),...updatedTask,...state.tasks.splice(index+1)};
            return{ tasks }
        }
        case DELETE_TASK:{
            const index =state.tasks.findIndex(t => t.id === action.payload.id);
            const updatedTask = action.payload;
            updatedTask.isCompleted = true;
            const tasks:ITask[] ={...state.tasks.slice(0,index),...updatedTask,...state.tasks.splice(index+1)};
            return{ tasks }
        }
        default:
            return state
    }
}







