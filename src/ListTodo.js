import { Button } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "./sagaActions";

const ListTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todo.todos);

    console.log(todos);

    const renderList = () => {
        return todos.map(todo => {
            return <p key={todo.id}>{todo.title}</p>;
        });
    };

    return (
        <div>
            <Button
                type="primary"
                onClick={() => dispatch({ type: sagaActions.FETCH_DATA_SAGA })}
            >
                Getdata
            </Button>
            {renderList()}
        </div>
    );
}

export default ListTodo;
