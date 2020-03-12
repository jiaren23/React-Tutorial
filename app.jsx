import React from 'react';
import ReactDOM from 'react-dom';

class InputGender extends React.Component{
    constructor(props){
        super(props)
        this.state = ({gender : ''})
        this.changeGender = this.changeGender.bind(this)
    }
    //宣告事件時傳入參數event取得觸發事件變數
    changeGender(event){
        //將觸發事件的DOM從event內的target屬性取出
        console.log(event.target)
        //指定選擇的性別給state.gender
        this.setState({gender:event.target.value})
    }
    componentDidUpdate(){
        console.log(`已將state.gender變動為：${this.state.gender}`)
    }
    render(){
        return (<select onChange={this.changeGender.bind(this)}>
                    <option value="M">男</option>
                    <option value="W">女</option>
                </select>)
    }
}
ReactDOM.render(<InputGender />,document.getElementById('root'))
