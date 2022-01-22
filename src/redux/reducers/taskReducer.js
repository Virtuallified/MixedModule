import { ADD_TASK, DEL_TASK, STS_TASK } from "../actions/constants"

const initialData = {
    taskItems: []
}

const taskReducer = (state = initialData, action) => {
    switch(action.type) {
        case ADD_TASK:
            return {
                ...state,
                taskItems: [...state.taskItems, {text: action.payload, activeStatus: false}]
            }
        case DEL_TASK:
            return {
                ...state,
                taskItems: [...state.taskItems.filter((contact) => contact.text.sln !== action.payload)]
            }
        case STS_TASK: {
            let updatedContacts = [];
            state.taskItems.map((task) => {
                if (task.text.sln === action.payload) {
                    if (task.activeStatus === false) {
                        task.activeStatus = true
                    }
                    else {
                        task.activeStatus = false
                    }
                }
                return updatedContacts.push(task)
            })
            return {
                ...state,
                taskItems: updatedContacts
            }
        }
        default:
            return state;
    }
}

export default taskReducer