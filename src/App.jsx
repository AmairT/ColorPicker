import { useState } from "react";

// Write your Color component here 
// Use object deconstruction Or use dot notation return <div className={props.color}></div>
const Color = ({color, setSelectedColor}) => {
return (
  <div 
    className={color}
    onClick={() => setSelectedColor(color)}
    ></div>
  )
}

// Start with a Picker component (App)
// Create a navbar to select a Color component
// In the return statement of your Picker component, place three instances of our Color component.
const App = () => {
const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="violet" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="yellow" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
