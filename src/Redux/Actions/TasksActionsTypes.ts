import {ITask} from '../../Types/AppTypes';

export const LOAD_TASKS ='LOAD_TASK';
export const LOAD_TASKS_SUCCESS ='LOAD_TASK_SUCCESS';
export const CREATE_TASK ='CREATE_TASK';
export const EDIT_TASK ='EDIT_TASK';
export const COMPLETE_TASK ='COMPLETE_TASK';


interface LoadTasksAction {
    type: typeof LOAD_TASKS;
    payload: ITask[];
}
interface LoadTasksSuccessAction {
    type: typeof LOAD_TASKS_SUCCESS;
    payload: ITask[];
}

interface CreateTaskAction {
    type: typeof CREATE_TASK;
    payload: ITask;
}
interface EditTaskAction {
    type: typeof EDIT_TASK;
    payload: ITask;
}
interface DeleteTaskAction {
    type: typeof COMPLETE_TASK;
    payload: ITask;
}


export type TasksActionTypes =LoadTasksAction | LoadTasksSuccessAction | CreateTaskAction | EditTaskAction |DeleteTaskAction;