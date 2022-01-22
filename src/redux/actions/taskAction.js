import { ADD_TASK, DEL_TASK, STS_TASK } from "./constants"

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