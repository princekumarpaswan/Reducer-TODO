import { useReducer } from "react";


const initialState = [];


function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TASK': return [
            ...state,
            {
                id: state.length + 1,
                name: action.payload
            }
        ];

        case 'DELETE_TASK': return state.filter(d => d.id !== action.payload)

        default: return state;
    }
}

export const Todos = () => {

    const [todos, dispatch] = useReducer(reducer, initialState);


    return (
        < >
            <h4 className="text-[50px] mt-[40px] font-[900] text-center " >Todo List :-<span className="ml-[20px]" >{todos.length}</span></h4>
            <div className="text-[30px] mt-[50px] border-[2px] mx-[40px] font-[900] text-center">
                Add New Task:
                <input className="text-[20px] ml-[20px] border-solid border-black-600 font-[900]" type="text" onBlur={(e) => dispatch({ type: 'ADD_TASK', payload: e.target.value })} />
            </div>
            <hr className="mt-[50px]" />

            {todos.map(todo => <li className="mt-[40px] text-center border-[2px] p-[15px] mx-[100px] font-[900] text-[30px] " key={todo.id}>{todo.name}
                <span className="ml-[30px] text-[15px] bg-red-500 p-[5px] rounded-[10px]">
                    <button onClick={() => dispatch({ type: 'DELETE_TASK', payload: todo.id })} >Delete</button>
                </span>
            </li>)}
        </>
    )
}
