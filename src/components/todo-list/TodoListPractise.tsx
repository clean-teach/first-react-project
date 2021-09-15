import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { TodoProvider } from '../../TodoContext';
import TodoCreate from './TodoCreate';
import TodoHead from './TodoHead.js';
import TodoList from './TodoList.js';
import TodoTemplate from './TodoTemplate';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #e9ecef;
    }
`;

function TodoListPractise() {
    return (
    <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    </TodoProvider>
    );
}

export default TodoListPractise;