import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import data from "./Data";
import QnA from "./QnA";

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="header">Frequently Asked Questions</div>
      <QnA data={data}/>
   
    </div>
  );
}

export default App;
