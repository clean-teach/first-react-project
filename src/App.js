import React from 'react';
import {Route, Link} from 'react-router-dom';
import Users from './components/api-integrate/Users';
import Home from './components/Home';
import Profile from './components/route-practice/Profile';
import subRoute from './components/route-practice/subRoute';
import TodoListPractise from './components/todo-list/TodoListPractise';
import { UsersProvider } from './contexts/api-integrate/UsersContext';

function App() {
  return (
    <>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/todoList'>Todo list</Link></li>
        <li><Link to='/users'>API 연동하기 연습</Link></li>
        <li><Link to='/profiles/velopert'>Profile/벨로퍼트</Link></li>
        <li><Link to='/profiles/gildong'>Profile/길동이</Link></li>
        <li><Link to='/profiles/gildong?detail=true'>Profile/gildong?detail=true</Link></li>
        <li><Link to='/subRoute'>subRoute</Link></li>
      </ul>
      <Route path='/' exact={true} component={Home} />
      <Route path='/todoList' component={TodoListPractise} />
      <UsersProvider>
        <Route path='/users' component={Users} />
      </UsersProvider>
      <Route path='/profiles' component={Profile} />
      <Route path='/profiles/:username' component={Profile} />
      <Route path='/subRoute' component={subRoute} />
    </>
  );
}

export default App;
