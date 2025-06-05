import './App.css'

const printName = (name) => {
    console.log("We're in printName!");
    console.log(`Hello, ${name}!`);
  };
  
  function App() {
    return (
      <div className="App">
        <button
          onClick={(event) => {
            printName("Ada Lovelace");
          }}
        >
          Click me
        </button>
      </div>
    );
  }
  
export default App