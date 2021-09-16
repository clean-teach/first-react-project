import Users from './components/api-integrate/Users';
import TodoListPractise from './components/todo-list/TodoListPractise';
import { UsersProvider } from './contexts/api-integrate/UsersContext';

function App() {
  return (
    <>
      <UsersProvider>
        <Users />
      </UsersProvider>
      <TodoListPractise/>
    </>
  );
}

export default App;
