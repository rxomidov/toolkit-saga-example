import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ListTodo from "./ListTodo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello from redux saga toolkit</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ListTodo />
      </div>
    </Provider>
  );
}

export default App;
