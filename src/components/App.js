import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToyList)
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newToy) {
    setToyList([...toyList, newToy]);
  }

  function handleDeleteToy(toyToDelete) {
    const updatedToyList = toyList.filter((toy) => toy.id !== toyToDelete.id);
    setToyList(updatedToyList);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToyList = toyList.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToyList(updatedToyList);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>
          {showForm ? "Hide Form" : "Add a Toy"}
        </button>
      </div>
      <ToyContainer
        toyList={toyList}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
