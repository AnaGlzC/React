import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import {deleteTodoAction} from '../redux/actions'
import { store } from "../redux/store";
import { Provider } from "react-redux";


const List = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return(
        <Provider store={store}>

            <div>
                {todos.map((todo) => {
                    return(
                        <div key={todo.id}>
                            <p>{todo.name} {todo.complete && '🚀 '}</p>
                            <button onClick={() => dispatch(deleteTodoAction(todo.id))}>
                                Delete
                            </button>
                        </div>
                    )
                        
                })}
            </div>

        </Provider>
        
    )
}

export default List;   