import React from 'react';
import {TaskContainer, Description, CompletedDescription, TaskBtnContainer, EditTaskBtn, CompleteTaskBtn} from './TaskCardStyledComponent';
import { Row }from 'styled-bootstrap-grid';
import {faPen,faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export interface TaskCardProps {
    id:number;
    description:string;
    categoryId:string;
    userId:number;
    isCompleted:string;
    completeTask:Function;
}
 
const TaskCard: React.SFC<TaskCardProps> = ({id, description,isCompleted,completeTask}) => {
    return ( 
        <TaskContainer>
            <Row>
                {isCompleted === "true" && <CompletedDescription>{description}</CompletedDescription>}
                {isCompleted === "false" && <Description>{description}</Description>}
                {isCompleted === "false" && <TaskBtnContainer>
                    <EditTaskBtn><FontAwesomeIcon className="" icon={faPen} /></EditTaskBtn>
                    <CompleteTaskBtn onClick={() => completeTask(id)} ><FontAwesomeIcon className="" icon={faCheck} /></CompleteTaskBtn>
                </TaskBtnContainer>}
            </Row>
        </TaskContainer>
     );
}
 
export default TaskCard;