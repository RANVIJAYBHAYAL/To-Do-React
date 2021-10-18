import todos from '../data';

const todoReducer = (state = todos, action) => {

    let newtodos;
    switch (action.type) {
        case "ADD_TODO_SAGA":
            newtodos = [...state];
            newtodos.push(action.payload)
            return newtodos;

        case "DELETE_TODO_SAGA":
            newtodos = [...state];
            newtodos = newtodos.filter((todo) => todo.id !== action.payload)
            return newtodos;

        default:
            return state   

    }
}

export default todoReducer