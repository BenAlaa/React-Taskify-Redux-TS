import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ITask, ICategory, IAppState } from '../../../Types/AppTypes';
import { getCategories } from '../../../Services/categoryService';
import * as taskActions from '../../../Redux/Actions/TasksActions';
import Input from '../../Common/Input/Input';

import './AddTask.css';

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
        const {data, error} =  this.state ;
        const { name, value } = event.currentTarget;
        switch (name) {
            case "description":
                data.description = value;
                error.description = "";
                break;
            case "category":
                data.selectedCategory= value;
                error.category = "";


            default:
                break;
        }
        this.setState({ data });

    }
    handleSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        this.validate();
        const{error,data} = this.state;
        if(error.description === "" && error.category === ""){
            const task:ITask ={
                id:0,
                description:data.description,
                categoryId:data.selectedCategory,
                isCompleted:false,
                userId:1
            }
            this.props.taskActions.creatTask(task);
            data.description="";
            data.selectedCategory="";
            this.setState({data});
        }
        return;

    }
    validate(){
        if(!this.state.data.description){
            const error={description:"Description is Required",category:""};
            this.setState({error});
        }
        if(!this.state.data.description){
            const error={description:"Description is Required",category:""};
            this.setState({error})
        }
    }
    render() {
        const { data, error } = this.state;
        return (
            <div className="container-fluid task-form-container col-12">
                <div className="row task-form col-12">
                    <form className="col-12 container-fluid" onSubmit={this.handleSubmit} >
                        <Input onChange={this.handleChange}  name="description" id="description" value={data.description} type="text" label="Description" error={error.description} placeholder="Description" focus={true} />
                        <div className="input-group col-11 offset-1">
                            <select className="custom-select" value={data.selectedCategory} onChange={this.handleChange} name="category" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                {data.categories.map(({id,name}) => {
                                return <option value={`${id}`}>{name}</option>
                                })}
                            </select>
                            {error.category && <div className="alert alert-danger error-container">{error.category}</div>}
                        </div>
                        <button type="submit"  className=" sub-btn col-3 offset-5">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: IAppState): ITask[] => {
    return state.tasks.tasks;
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskForm);
// export default AddTaskForm;