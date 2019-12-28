import {ITask} from '../../Types/AppTypes';
import {Dispatch} from 'redux';
import {LOAD_TASKS_SUCCESS, CREATE_TASK,EDIT_TASK,COMPLETE_TASK,TasksActionTypes} from './TasksActionsTypes';
import {getTasks} from '../../Services/taskService';


export function loadTasks() {
    return function(dispatch:Dispatch) {
        return getTasks()
            .then(tasks => {
                dispatch(loadTasksSuccess(tasks));
            })
            .catch(err => {
                throw err;
            });
    };
}
export function loadTasksSuccess(tasks:ITask[]): TasksActionTypes{
    return {
        type: LOAD_TASKS_SUCCESS,
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
