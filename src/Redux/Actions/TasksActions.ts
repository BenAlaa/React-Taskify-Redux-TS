import {ITask} from '../../Types/AppTypes';
import {LOAD_TASKS, CREATE_TASK,EDIT_TASK,COMPLETE_TASK,TasksActionTypes} from './TasksActionsTypes';



export function loadTasks(tasks:ITask[]):TasksActionTypes {
    return {
        type: LOAD_TASKS,
        payload: tasks
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
        type: COMPLETE_TASK,
        payload: task
    }
}
