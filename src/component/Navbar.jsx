import { useState } from "react";
import Select from "react-select";

const Navbar = ({ uncompletedTodos, selectedOption, onChange }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "Uncompleted", label: "Uncompleted" },
  ];

  if (!uncompletedTodos)
    return <h3 className="todoTitle">Set Your Today Todos !</h3>;

  return (
    <header>
      <h3>
        You have
        <div>
          <span>{uncompletedTodos}</span>
        </div>
        uncompleted todos !
      </h3>
      <Select onChange={onChange} value={selectedOption} options={options} className="select" />
    </header>
  );
};

export default Navbar;
