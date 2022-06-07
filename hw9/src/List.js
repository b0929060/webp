import React, {Component} from 'react';
import Todo from './Todo';
const List = () => {
    var output=[];
    output.push(
    <><div>
        <p>123</p><button>x</button>
    </div>
    </>
        )
        return output;
}

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {comps : []}
    }
    
    render() {
        const {comps } = this.state;
        return (
            <div>
            <button onClick={() => this.setState({comps: comps.concat([Date.now()])})}>Add</button>
            {comps.map(comp => {
                    return <List key={comp} />
                })}
            </div>
        );
    }
}
export default Button;