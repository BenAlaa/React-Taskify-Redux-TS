import React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCategories } from '../../Services/categoryService';
import { TasksContainer, Nav, NavTabs, ActiveTab, Tab, TabContent, TabPanel, ActiveTabPanel, AddTaskBtn, AddSympol, Modal, ModalDialog, ModalContent, ModalHeader, ModalTitle, CloseModalBtn, CloseSympol, ModalBody } from './TasksStyledComponents';
import { Row, Col } from 'styled-bootstrap-grid';
import TaskCard from './TaskCard/TaskCard';
import TaskForm from '../Tasks/AddTaskForm/AddTask';
import { ITasksState, ITask, ICategory, IAppState } from '../../Types/AppTypes';
import * as taskActions from '../../Redux/Actions/TasksActions';


export interface TasksProps {
    tasks: ITask[];
    taskActions: typeof taskActions;


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
        if (this.props.tasks.length === 0) {
            this.props.taskActions.loadTasks();
        }
        const categories: ICategory[] = await getCategories();
        this.setState({ categories });
    }
    completeTask(id: number) {
        console.log('clicked task id: ', id);
        const task = this.props.tasks.find(t => t.id === id);
        console.log('clicked task : ', task);

        this.props.taskActions.deleteTask(task as ITask);
    }
    render() {
        return (
            <TasksContainer>
                <Row>
                    <Col col={12} >
                        <Nav>
                            <NavTabs>
                                {this.state.categories.map(cat => {
                                    if (`${cat.id}` === "1") return <ActiveTab id={`nav-${cat.name}-tab`} key={`${cat.id}`} data-toggle="tab" href={`#nav-${cat.name}`} role="tab" aria-controls={`nav-${cat.name}`} aria-selected="true">{cat.name}</ActiveTab>
                                    else return <Tab id={`nav-${cat.name}-tab`} key={`${cat.id}`} data-toggle="tab" href={`#nav-${cat.name}`} role="tab" aria-controls={`nav-${cat.name}`} aria-selected="true">{cat.name}</Tab>
                                })}
                            </NavTabs>
                        </Nav>
                        <TabContent>
                            {this.state.categories.map(cat => {
                                if (`${cat.id}` === "1") {
                                    return (
                                        <ActiveTabPanel key={`${cat.id}`} id={`nav-${cat.name}`} role="tabpanel" aria-labelledby={`nav-${cat.name}-tab`}>
                                            {this.props.tasks.filter(t => t.categoryId === cat.id).map(t => {
                                                return (
                                                    <ActiveTabPanel key={`${t.id}`} id="nav-home" role="tabpanel" aria-labelledby={`nav-${cat.name}-tab`}>
                                                        <TaskCard description={t.description} id={t.id} isCompleted={`${t.isCompleted}`} completeTask={this.completeTask.bind(this)} userId={t.userId} categoryId={t.categoryId} ></TaskCard>
                                                    </ActiveTabPanel>
                                                )
                                            })}
                                        </ActiveTabPanel>
                                    )
                                }
                                else {
                                    return (
                                        <TabPanel key={`${cat.id}`} id={`nav-${cat.name}`} role="tabpanel" aria-labelledby={`nav-${cat.name}-tab`}>
                                            {this.props.tasks.filter(t => t.categoryId === cat.id).map(t => {
                                                return (
                                                    <ActiveTabPanel key={`${t.id}`} id="nav-home" role="tabpanel" aria-labelledby={`nav-${cat.name}-tab`}>
                                                        <TaskCard description={t.description} id={t.id} isCompleted={`${t.isCompleted}`} completeTask={this.completeTask.bind(this)} userId={t.userId} categoryId={t.categoryId} ></TaskCard>
                                                    </ActiveTabPanel>
                                                )
                                            })}
                                        </TabPanel>
                                    )
                                }
                            })}
                        </TabContent>

                    </Col>
                </Row>
                <Row>
                    <Col col={3} offset={3}>
                            <AddTaskBtn data-toggle="modal" data-target="#TaskModal"><AddSympol>+</AddSympol></AddTaskBtn>
                    </Col>
                </Row>
                <Modal id="TaskModal"  role="dialog" aria-labelledby="TaskModalLabel" aria-hidden="true">
                    <ModalDialog>
                            <ModalContent>
                                <ModalHeader>
                                    <ModalTitle id="TaskModalLabel">Add Task</ModalTitle>
                                    <CloseModalBtn data-dismiss="modal" aria-label="Close"><CloseSympol aria-hidden="true">&times;</CloseSympol></CloseModalBtn>
                                </ModalHeader>
                                <ModalBody>
                                    <TaskForm></TaskForm>
                                </ModalBody>
                            </ModalContent>
                    </ModalDialog>
                </Modal>
            </TasksContainer>
        );
    }
}

const mapStateToProps = (state: IAppState): ITasksState => {
    return {
        tasks: state.tasks.tasks
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
