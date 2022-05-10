import { useEffect, useRef, useState } from "react";

const TodoForm = ({ addTodoHandler, edit }) => {
  const [input, setInput] = useState(edit ? edit.text : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Enter your todo !");
      return;
    }

    addTodoHandler(input);

    setInput("");
  };

  return (
    <form action="#" onSubmit={submitHandler}>
      <div className="formControl">
        <input
          placeholder={edit ? "Update Todo..." : "Add New Todo..."}
          type="text"
          value={input}
          onChange={changeHandler}
          ref={inputRef}
        />
        <button className={`btn ${edit ? "updateTodo" : "addTodo"}`} type="submit">{edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
