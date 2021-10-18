export const addToDo=(todo)=>({
    type: "ADD_TODO",
    payload: todo
})

export const deleteToDo=(id)=>({
    type: "DELETE_TODO",
    payload: id
})

export const updateToDo=(todo)=>({
    type: "UPDATE_TODO",
    payload: todo
})

export const addToDoSaga=(todo)=>({
    type: "ADD_TODO_SAGA",
    payload: todo
})

export const deleteToDoSaga=(id)=>({
    type: "DELETE_TODO_SAGA",
    payload: id
})

export const updateToDoSaga=(todo)=>({
    type: "UPDATE_TODO_SAGA",
    payload: todo
})