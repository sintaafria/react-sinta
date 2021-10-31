import React from 'react';

class CalComp extends React.Component {

    state = {
        input1: '',
        input2: '',
        output: '',
    };

    handleSum = () => {
        let a = Number(this.state.input1);
        let b = Number(this.state.input2);
        
        if (this.props.operator === '+'){
            this.setState({output: a + b})
        }
        if (this.props.operator === '-'){
            this.setState({output: a - b})
        }
        if (this.props.operator === 'x'){
            this.setState({output: a * b})
        }
        if (this.props.operator === '/'){
            this.setState({output: a / b})
        }
    }; 

    handeReset = () => {
        this.setState({
            input1: '',
            input2: '',
            output: '',
        })
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.input1} onChange={e =>this.setState({input1: e.target.value})}/>
                <span><b> {this.props.operator} </b></span>
                <input type="text" value={this.state.input2} onChange={e =>this.setState({input2: e.target.value})}/>
                <span>  </span><button onClick={this.handleSum}><b> = </b></button> <span>  </span>
                <input type="text" defaultValue={this.state.output}/><br/>
                <button onClick={this.handeReset}>Reset</button>
            </div>
        )
    }
    
}

export default CalComp;