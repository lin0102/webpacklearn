import React from 'react'
import ReactDOM from 'react-dom'
import Rose from './img/rose.jpg'
import './index.css'
// ReactDOM.render(<div>hello webpack</div>,document.body);
class App extends React.Component {
    state  ={
        reset :'yes'
    }
    onClick = () => {
        this.setState({
            reset: this.state.reset === 'yes' ? 'no' : 'yes'
        })
    }
    render () {
        return (
            <div><img src = {Rose} alt="玫瑰" className = {this.state.reset === 'yes' ? 'flower' : 'flower flower--rotate'} onClick = {this.onClick} /></div>
        )
    }
}
ReactDOM.render(<App />,document.body);

//需打包js文件
