import { combineReducers } from "redux";

function todolist(state=[],actions){
    switch (actions.type){
        case 'add':
            return [...state,actions.data];
            break;
        case "updataStatus":
            return [...state].map((item,index)=>{
                if(item.data==actions.data.target){
                    item.status=actions.data.newStatus
                }
                return item
            })
            break;
        case 'clear':
            return [...state].filter((item)=>{
                if(item.status !== 'finished'){
                    return item
                }
            })
            break;
        default: return [...state]
    }
}
function filter(state='all',actions){
    if(actions.type=='filter-name'){
        return actions.text
    }else{
        return state
    }
}

export default combineReducers({
    todolist,
    filter
})