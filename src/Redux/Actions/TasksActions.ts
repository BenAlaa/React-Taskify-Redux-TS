import {ITask} from '../../Types/AppTypes';
import {LOAD_TASKS, CREATE_TASK,EDIT_TASK,DELETE_TASK,TasksActionTypes} from './TasksActionsTypes';



export function loadTasks(task:ITask):TasksActionTypes {
    return {
        type: CREATE_TASK,
        payload: task
    }
}
export function creatTask(task:ITask):TasksActionTypes {
    return {
        type: CREATE_TASK,
        payload: task
    }
}
export function editTask(task:ITask):TasksActionTypes {
    return {
        type: EDIT_TASK,
        payload: task
    }
}
export function deleteTask(task:ITask):TasksActionTypes {
    return {
        type: DELETE_TASK,
        payload: task
    }
}
