import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map(item => {
                return (
                    <div>
                        <Todo task={item} />
                    </div>
                )
            })}
        </div>
    )
};

export default TodoList;