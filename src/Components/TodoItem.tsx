import React from 'react';

interface TodoItemProps {
    // Define the props for your component here
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
    // Implement your component logic here
    const text = 'Wash clothes.';
    const isCompleted = false;

    return (
        // JSX code for your component's UI goes here
        <div className={isCompleted ? "completed": ""}>
            {text}
        </div>
    );
};

export default TodoItem;
