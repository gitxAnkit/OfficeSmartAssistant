import { useState } from 'react'
import './App.css'

function App() {

  const [userInput, setUserInput] = useState('');

  // Function to handle user input changes
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleCommandSubmit = () => {
    // Process the user command (you can implement this part based on your project logic)
    console.log('User Command:', userInput);

    // Clear the input field after processing
    setUserInput('');
  };

  return (
    <div>
      <h1>AI-based Smart Assistant</h1>
      <div>
        <label htmlFor="userInput">Enter your command:</label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleInputChange}
        />
        <button onClick={handleCommandSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default App
