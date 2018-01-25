import React,{Component} from 'react';
import {connect} from 'react-redux';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            value: ''
        }
        this.oninput = this.oninput.bind(this);
        this.add = this.add.bind(this);
    }
    componentDidMount(){
        console.log(this.props)
    }
    add(e){
        if(e.keyCode!==13) return;
        this.props.add(this.state.value);
        this.setState({
            value: ""
        })
    }
    oninput(e){
        this.setState({
            value: e.target.value
        })
    }
    toggleStatus(item){
        this.props.updataStatus({
            target: item.data,
            newStatus: item.status=="pending"?"finished":"pending"
        })
    }
    render(){
        let {value} = this.state;
        let {todolist,filter,clear,length} = this.props;
        return <div className="todolist">
            <p><input value={value} onInput={this.oninput}  type="text" onKeyDown={this.add}/></p>
            <ul className="todo-list">
            {
                todolist.map((item,index)=>{
                    return <li className={item.status!=='pending'?'checked todo-item':'todo-item'} key={index}><span onClick={()=>{this.toggleStatus(item)}} className="checkbox"></span>{item.data}</li>
                })
            }
            </ul>
            <p>
                <button className="selected" onClick={()=>{filter('all')}}>全部</button>
                <button onClick={()=>{filter('pending')}}>正在做</button>
                <button onClick={()=>{filter('finished')}}>已完成</button>
                <span className="unfinish">{length}项未完成</span>
                <span className="unfinish" onClick={clear}>清除已完成的</span>
            </p>
        </div>
    }
}
function filter_list(todolist,filter){
    if(filter=='all') return todolist;
    let arr=[];
    todolist.forEach(item=>{
        if(item.status==filter){
            arr.push(item)
        }
    })
    return arr
}
function get_pending(todolist){
    let len=0;
    todolist.forEach(item=>{
        if(item.status=='pending')++len
    })
    return len;
}
function mapStateToProps(state){
    return {
        todolist: filter_list(state.todolist,state.filter),
        length: get_pending(state.todolist)
    }
}
function mapDispatchTopProp(dispatch){
    return {
        add:function(data){
            dispatch({
                type: 'add',
                data: {
                    data: data,
                    status: 'pending'
                }
            })
        },
        updataStatus:function(obj){
            dispatch({
                type: 'updataStatus',
                data: obj
            })
        },
        filter(type){
            dispatch({
                type: 'filter-name',
                text: type
            })
        },
        clear(){
            dispatch({
                type: 'clear'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchTopProp)(TodoList);
// function connect (fn1, fn2) {
//     return function (TodoList) {
//         let state = fn1(store.getState());
//         let methods = fn2(store.dispatch);
//         class Super extends Component {
//             render () {
//                 let data = {
//                     ...this.props,
//                     ...state,
//                     ...methods
//                 }
//                 return (
//                     <TodoList {...data} />
//                 )
//             }
//         }
//         return Super;
//     }
// }