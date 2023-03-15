import React, { useState } from 'react';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [data, setData] = useState({});

  const handleDragStart = (event, data) => {
    setDragging(true);
    setData(data);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setData({});
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setData({});
    setDragging(false);
    // Do something with the dropped data
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div
        draggable
        onDragStart={(event) => handleDragStart(event, { id: 1, name: 'item 1' })}
        onDragEnd={handleDragEnd}
      >
        Item 1
      </div>
      <div
        draggable
        onDragStart={(event) => handleDragStart(event, { id: 2, name: 'item 2' })}
        onDragEnd={handleDragEnd}
      >
        Item 2
      </div>
      {dragging && <div>Dragging {data.name}</div>}
    </div>
  );
};

export default DragAndDrop;
