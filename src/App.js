import "./App.css";
import TodoApp from "./component/TodoApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>TodoList App</h1>
        <Routes>
          <Route path="/" element={<TodoApp />} />
        </Routes>
        {/* <TodoApp /> */}
      </div>
    </Router>
  );
};

export default App;
