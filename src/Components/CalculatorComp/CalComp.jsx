import React from 'react';

class CalComp extends React.Component {

    state = {
        input1: '',
        input2: '',
        output: '',
    };

    handleSum = () => {
        if (this.props.operator == '+'){
            this.setState({output: this.state.input1 + this.state.input2})
        }
        if (this.props.operator == '-'){
            this.setState({output: this.state.input1 - this.state.input2})
        }
        if (this.props.operator == 'x'){
            this.setState({output: this.state.input1 * this.state.input2})
        }
        if (this.props.operator == '/'){
            this.setState({output: this.state.input1 / this.state.input2})
        }
    }; 
    render() {
        return(
            <div>
                <input type="text" value={this.state.input1} onChange={e =>this.setState({input1: Number(e.target.value)})}/>
                <span><b> {this.props.operator} </b></span>
                <input type="text" value={this.state.input2} onChange={e =>this.setState({input2: Number(e.target.value)})}/>
                <span>  </span><button onClick={this.handleSum}><b> = </b></button> <span>  </span>
                <input type="text" value={this.state.output}/>
            </div>
        )
    }
    
}

export default CalComp;