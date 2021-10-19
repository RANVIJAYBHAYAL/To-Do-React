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

        case "UPDATE_TODO_SAGA":
            newtodos = [...state];
            let index = -1;
            for (let i = 0; i < newtodos.length; i++) {
                index++;
                if (newtodos[i].id === action.payload.id) {
                    break;
                }
            }
            if (index !== -1) {
                newtodos[index] =action.payload;
            }

            return newtodos;

        default:
            return state

    }
}

export default todoReducer