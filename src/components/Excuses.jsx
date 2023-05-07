import React, {Component} from 'react';

class Excuses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            excuse: ''
        }
    }

    generateExcuse = () => {
        const rand = Math.floor(Math.random() * this.props.excuses.length);
        this.setState({excuse: this.props.excuses[rand]})
        console.log(this.props.excuses[rand])


    }

    render () {
        return (
            <div>
                <h3>Click Button to Generate your Excuse</h3>
                <button 
                    className='btn btn-primary bg-blue-500 p-2 border-solid border-4 border-gray-600 rounded-lg'
                    onClick={this.generateExcuse}>Generate Excuse</button>
                <div>{this.state.excuse.excuse}</div>
                
                
            </div>
        )
    }


}

export default Excuses



