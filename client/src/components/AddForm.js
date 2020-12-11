import React from 'react';
import { connect } from 'react-redux';

import { postSmurf, setSmurfName, setSmurfPosition, setSmurfNickname, setSmurfDescription, clearForm } from '../actions/index';

const INPUT_NAME = {
    NAME: 'name', 
    POSITION: 'position', 
    DESCRIPTION: 'description',
    NICKNAME: 'nickname' 
}

class AddForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.postSmurf({
            name: this.props.form.name,
            nickname: this.props.form.nickname,
            position: this.props.form.position,
            description: this.props.form.description,
            id: Date.now()
        });
        this.props.clearForm();
    }

    handleChange = e => {
        switch(e.target.name) {
            case(INPUT_NAME.NAME):
                return this.props.setSmurfName(e.target.value);
            case(INPUT_NAME.POSITION):
                return this.props.setSmurfPosition(e.target.value);
            case(INPUT_NAME.NICKNAME):
                return this.props.setSmurfNickname(e.target.value);
            case(INPUT_NAME.DESCRIPTION):
                return this.props.setSmurfDescription(e.target.value);
            default:
                return null;
        }
    }

    render() {
        console.log(this.props)
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input 
                        value={this.props.form.name} 
                        onChange={this.handleChange} 
                        name={INPUT_NAME.NAME} 
                        id="name" 
                    />
                    <label htmlFor="position">Position:</label><br/>
                    <input 
                        value={this.props.form.position} 
                        onChange={this.handleChange} 
                        name={INPUT_NAME.POSITION} 
                        id="position" 
                    />
                    <label htmlFor="nickname">Nickname:</label><br/>
                    <input 
                        value={this.props.form.nickname} 
                        onChange={this.handleChange} 
                        name={INPUT_NAME.NICKNAME} 
                        id="nickname"
                    />
                    <label htmlFor="description">Description:</label><br/>
                    <input 
                        value={this.props.form.description} 
                        onChange={this.handleChange} 
                        name={INPUT_NAME.DESCRIPTION} 
                        id="description" 
                    />
                </div>
                {this.props.error && 
                    <div data-testid="errorAlert" className="alert alert-danger" role="alert">
                        Error: {this.props.error}
                    </div>
                }
                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = state => {
    return {
        error: state.apiReducer.error,
        form: state.formReducer
    };
}

export default connect(mapStateToProps, { postSmurf, setSmurfName, setSmurfPosition, setSmurfNickname, setSmurfDescription, clearForm })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.