import DataProdvider from './Context/DataProdvider';
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
       
       <DataProdvider>
          <Home />
       </DataProdvider>
    </div>
  );
}

export default App;
