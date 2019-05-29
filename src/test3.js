import React from 'react'
class Test3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log(this.state.count)
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate',this.state.count)
        setTimeout(() => {
            console.log('componentDidUpdate',this.state.count)
        }, 2000)
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
            </div>
        );
    }
}
export default Test3