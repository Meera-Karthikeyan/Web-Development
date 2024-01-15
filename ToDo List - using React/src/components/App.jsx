import React, { useState } from "react";

function App() {
  const [itemValue, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }
  function addItem() {
    setItemsList((prevValue) => {
      return [...prevValue, itemValue];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={itemValue} />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
