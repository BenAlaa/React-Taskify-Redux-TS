import React from 'react';
import { faFacebook, faGoogle  } from "@fortawesome/free-brands-svg-icons";
import {faPen,faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './TaskCard.css';
export interface TaskCardProps {
    id:number;
    description:string;
    categoryId:number;
    userId:number;
    isCompleted:string;
}
 
const TaskCard: React.SFC<TaskCardProps> = ({description,isCompleted}) => {
    const descriptionClasses = isCompleted === "true"? "description-container-completed":"description-container";
    return ( 
        <div className="container-fluid task-container col-12">
            <div className="row ">
                <div className={`col-10 col-sm-10 col-xl-10 ${descriptionClasses}`}>{description}</div>
                <div className="col-1 col-sm-1 col-xl-1 task-btns-container ">
                    <div className="row task-btn-icon-edit-container"><FontAwesomeIcon className="" icon={faPen} /></div>
                    <div className="row task-btn-icon-check-container "><FontAwesomeIcon className="" icon={faCheck} /></div>
                </div>
    
            </div>
        </div>
     );
}
 
export default TaskCard;