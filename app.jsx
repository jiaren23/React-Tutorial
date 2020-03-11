import React from 'react';
import ReactDOM from 'react-dom';

class NowTime extends React.Component{
    constructor(props){
        super(props)
        this.state = {time : new Date().toLocaleTimeString()}
    }

    // 以下有各種 component 函式  兼是生命週期的過程
    componentDidMount(){   //加入組件建構完成後執行的事件
        /*在建構完成後，每秒都去刷新this.state.time的值
        (1)先去宣告一個更新state內容的function
        (2)每秒去執行一次該function刷新*/
        const upTime = () =>{
            this.setState({time : new Date().toLocaleTimeString()})
        }
        setInterval(upTime,1000)
    }
    componentDidUpdate(){  //加入state被修改時會執行的函式
        console.log('時間一分一秒在跑...')   //執行內容
    }
    componentWillUnmount(){   //組件結束時會執行的事件
        console.log(`移除組件的時間為：${this.state.time}`) //執行內容 : 這裡記錄移除掉的時間
    }
    render(){
        return <h1>現在時間是：{this.state.time}</h1>
    }
}

ReactDOM.render(<NowTime />,document.getElementById('root'))


// 以下for  componentWillUnmount()  用來執行移除組件
// 宣告一個function，來移除document.getElementById('root')中的組件
const removeComponent = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}
//延遲五秒後執行移除
setTimeout(removeComponent,5000)