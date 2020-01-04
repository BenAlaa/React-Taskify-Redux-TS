import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'styled-bootstrap-grid';
import { FormContainer, TaskForm, InputGroup, Select, Option, InputError, Button } from './AddTaskStyledComponents';
import { ITask, ICategory, IAppState, ITasksState } from '../../../Types/AppTypes';
import { getCategories } from '../../../Services/categoryService';
import * as taskActions from '../../../Redux/Actions/TasksActions';
import Input from '../../Common/Input/Input';


export interface AddTaskFormProps {
    taskActions: typeof taskActions;
}

export interface AddTaskFormState {
    data: {
        description: string;
        selectedCategory: string;
        categories: ICategory[]

    }
    error: {
        description: string;
        category: string;
    }

}


class AddTaskForm extends React.Component<AddTaskFormProps, AddTaskFormState> {
    state: AddTaskFormState = {
        data: {
            description: "",
            selectedCategory: "",
            categories: []
        },
        error: {
            description: "",
            category: ""
        }

    }
    async componentDidMount() {
        const categories: ICategory[] = await getCategories();
        const data = { ...this.state.data, categories };
        this.setState({ data });

    }
    handleChange = (event: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { data, error } = this.state;
        const { name, value } = event.currentTarget;
        switch (name) {
            case "description":
                data.description = value;
                error.description = "";
                break;
            case "category":
                data.selectedCategory = value;
                error.category = "";
                break;

            default:
                break;
        }
        this.setState({ data });

    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        event.preventDefault();
        this.validate();
        const { error, data } = this.state;
        if (error.description === "" && error.category === "") {
            const task: ITask = {
                id: 0,
                description: data.description,
                categoryId: data.selectedCategory,
                isCompleted: false,
                userId: 1
            }
            this.props.taskActions.creatTask(task);
            data.description = "";
            data.selectedCategory = "";
            this.setState({ data });
        }
        return;

    }
    validate() {
        if (!this.state.data.description) {
            const error = { description: "Description is Required", category: "" };
            this.setState({ error });
        }
        if (!this.state.data.description) {
            const error = { description: "Description is Required", category: "" };
            this.setState({ error })
        }
    }
    render() {
        const { data, error } = this.state;
        return (
            <FormContainer>
                <Row>
                    <Col col={12}>
                        <TaskForm onSubmit={this.handleSubmit}>
                            <Input onChange={this.handleChange} name="description" id="description" value={data.description} type="text" label="Description" error={error.description} placeholder="Description" focus={true} />
                            <InputGroup>
                                <Select value={data.selectedCategory} onChange={this.handleChange}>
                                    <Option>Select Category ...</Option>
                                    {data.categories.map(({id, name}) => {
                                        return <Option key={id} value={`${id}`}>{name}</Option>
                                    })}
                                </Select>
                                {error.category && <InputError>{error.category}</InputError>}
                            </InputGroup>
                            <Button onClick={this.handleSubmit} data-dismiss="modal" >Add</Button>

                        </TaskForm>
                    </Col>
                </Row>
            </FormContainer>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
// export default AddTaskForm;