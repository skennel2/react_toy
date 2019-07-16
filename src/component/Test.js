import React from 'react';

class TestComponent extends React.Component {
    constructor(){
        super(...arguments);
    }

    handleChange(e){
        alert(e.value)
    }

    render(){   
        return (
            <div>
                <div>
                    <SimpleTextBoxForm
                        place="ID"
                        onChange={this.handleChange.bind(this)}/>
                </div>
            </div>      
        );
    }
}

class SimpleTextBoxForm extends  React.Component {
    state = {
        value : ''
    }

    handleBlur(e){
        this.props.onChange(this.state);
    }

    handleChange(e){
        this.setState({ value : e.target.value });
    }

    render(){
        return(
            <div>
                <input 
                    placeHolder={this.props.place} 
                    value={this.state.value}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    name='textbox'/>
            </div>
        );
    }
}

export default TestComponent;
