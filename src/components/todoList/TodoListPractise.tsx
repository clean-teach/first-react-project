import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './TodoCreate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #e9ecef;
    }
`;

function TodoListPractise() {
    return (
    <>
        <GlobalStyle />
        <TodoTemplate>
            <TodoHead />
            <TodoList />
            <TodoCreate />
        </TodoTemplate>
    </>
    );
}

export default TodoListPractise;