import React from 'react';
import {faPen,faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TaskCard.css';
export interface TaskCardProps {
    id:number;
    description:string;
    categoryId:string;
    userId:number;
    isCompleted:string;
    completeTask:Function;
}
 
const TaskCard: React.SFC<TaskCardProps> = ({id, description,isCompleted,completeTask}) => {
    const descriptionClasses = isCompleted === "true"? "description-container-completed":"description-container";
    return ( 
        <div className="container-fluid task-container col-12">
            <div className="row ">
                <div className={`col-10 col-sm-10 col-xl-10 ${descriptionClasses}`}>{description}</div>
                {isCompleted === "false" && <div className="col-1 col-sm-1 col-xl-1 task-btns-container ">
                    <div className="row task-btn-icon-edit-container" ><FontAwesomeIcon className="" icon={faPen} /></div>
                    <div className="row task-btn-icon-check-container " onClick={() => completeTask(id)}><FontAwesomeIcon className="" icon={faCheck} /></div>
                </div>}
    
            </div>
        </div>
     );
}
 
export default TaskCard;