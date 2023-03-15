import './App.css';
import DragAndDrop from './Components/DragAndDrop';

function App() {
  return (
    <div>
      <h1>Draggable List</h1>
      <DraggableList />
    </div>
  );
}




function DraggableList() {
  const handleDragStart = (event) => {
    // Set the drag data to the ID of the dragged element
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    event.target.classList.add("dragover");
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragLeave = (event) => {
    event.target.classList.remove("dragover");
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData("text/plain");
    const sourceElement = document.getElementById(sourceId);
    const targetElement = event.target;
    targetElement.parentNode.insertBefore(sourceElement, targetElement);
    targetElement.classList.remove("dragover");
  };

  return (
    <ul>
      <li id="item1" draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        Item 1
      </li>
      <li id="item2" draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        Item 2
      </li>
      <li id="item3" draggable={true} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
        Item 3
      </li>
    </ul>
  );
}

export default App;
