import {CREATE_TASK,EDIT_TASK,COMPLETE_TASK,TasksActionTypes, LOAD_TASKS, LOAD_TASKS_SUCCESS} from '../Actions/TasksActionsTypes';
import {ITasksState, ITask} from '../../Types/AppTypes';


const initialState:ITasksState={
    tasks:[],
}


const  tasksReducer = (state = initialState, action :TasksActionTypes):ITasksState => {

    switch(action.type){

        case LOAD_TASKS:{
            return{
                tasks:[...action.payload]
            }
        }
        case LOAD_TASKS_SUCCESS:{
            return{
                tasks:[...action.payload]
            }
        }
        case CREATE_TASK:{
            const newTask = {...action.payload,id:state.tasks.length+1};
            return{
                tasks:[...state.tasks, newTask]
            }
        }
        case EDIT_TASK:{
            // get the index of task to be updated
            const index =state.tasks.findIndex(t => t.id === action.payload.id);
            const updatedTask = action.payload;
            // insert the updated task in the same index of the old task
            const tasks:ITask[] ={...state.tasks.slice(0,index),...updatedTask,...state.tasks.splice(index+1)};
            return{ tasks }
        }
        case COMPLETE_TASK:{
            // get the index of task to be updated
            const index =state.tasks.findIndex(t => t.id === action.payload.id);
            const updatedTask = action.payload;
            updatedTask.isCompleted = true;
            // insert the updated task in the same index of the old task
            const tasks:ITask[] ={...state.tasks.slice(0,index),...updatedTask,...state.tasks.splice(index+1)};
            return{ tasks }
        }
        default:
            return state;
    }
}

export default tasksReducer;







