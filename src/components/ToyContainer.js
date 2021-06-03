import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toyList, onDeleteToy, onUpdateToy }) {
  const toysItem = toyList.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onUpdateToy={onUpdateToy}
    />
  ));

  return <div id="toy-collection">{toysItem}</div>;
}

export default ToyContainer;
