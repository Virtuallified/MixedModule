export const ADD_TASK = "ADD_CONTACT"
export const DEL_TASK = "DELETE_CONTACT"
export const STS_TASK = "STATUS_CONTACT"

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const deleteTask = (task) => ({
    type: DEL_TASK,
    payload: task
})

export const statusTask = (task) => ({
    type: STS_TASK,
    payload: task
})