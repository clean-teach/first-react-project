import React from 'react';
import {Route, Link} from 'react-router-dom';
import Users from './components/api-integrate/Users';
import Home from './components/Home';
import TodoListPractise from './components/todo-list/TodoListPractise';
import { UsersProvider } from './contexts/api-integrate/UsersContext';

function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/todoList'>Todo list</Link></li>
        <li><Link to='/users'>API 연동하기 연습</Link></li>
      </ul>
      <Route path='/' exact={true} component={Home} />
      <Route path='/todoList' component={TodoListPractise} />
      <UsersProvider>
        <Route path='/users' component={Users} />
      </UsersProvider>
    </>
  );
}

export default App;
