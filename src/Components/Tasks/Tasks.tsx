import React from 'react';
import { getTasks } from '../../Services/taskService';
import { getCategories } from '../../Services/categoryService'
import { getCurrentUser } from '../../Services/authService';
import TaskCard from './TaskCard/TaskCard';
import { ITasksState, ITask, ICategory, IUser } from '../../Types/AppTypes';

import "./Tasks.css";

export interface TasksProps {
    tasks: ITasksState;
}

export interface TasksState {
    tasks: ITask[],
    categories: ICategory[]
}

class Tasks extends React.Component<TasksProps, TasksState> {
    state: TasksState = {
        tasks: [],
        categories: []
    }
    async componentDidMount() {
        const tasks: ITask[] = await getTasks("1");
        const user =await getCurrentUser();

        const categories: ICategory[] = await getCategories();
        this.setState({ tasks, categories });
    }
    render() {
        return (
            <div className="container tasks-container">
                <div className="row">
                    <div className="col-12">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                {
                                    this.state.categories.map(cat => {
                                        const classes = `${cat.id}` === "1" ? "nav-item nav-link category-tab active" : "nav-item nav-link category-tab";
                                        console.log('cat-tab classes: ',classes);
                                        return <a className={classes} id={`nav-${cat.name}-tab`} key={`${cat.id}`}  data-toggle="tab" href={`#nav-${cat.name}`} role="tab" aria-controls={`nav-${cat.name}`} aria-selected="true">{cat.name}</a>
                                    })}

                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            {
                                this.state.categories.map(cat => {
                                    const classes = `${cat.id}` === "1" ? "tab-pane fade show active" : "tab-pane fade show"
                                    return (
                                        <div className={classes} key={`${cat.id}`} id={`nav-${cat.name}`} role="tabpanel" aria-labelledby={`nav-${cat.name}-tab`}>
                                            {
                                               this.state.tasks.filter(t => t.categoryId === cat.id).map(t => {
                                                   return(
                                                   <div className="tab-pane fade show active" key={`${t.id}`} id="nav-home" role="tabpanel" aria-labelledby={`nav-${cat.name}-tab`}>
                                                       <TaskCard description={t.description} id={t.id} isCompleted={`${t.isCompleted}`} userId={t.userId} categoryId={t.categoryId}></TaskCard>
                                                    </div>

                                                   )
                                                
                                               })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-3 offset-3">
                        <button type="submit" className="add-task-btn fixed-bottom"><span className="add-sympol">+</span></button>
                    </div>
                </div>
            </div>

        );
    }
}



export default Tasks;