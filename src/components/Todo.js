import React from "react";

const Todo = (props)=> {
    return (
        <div>
        <input type="checkbox"  name={props.task} />
        <label for={props.task}>{props.task}</label>
        </div>
    );
}

export default Todo;