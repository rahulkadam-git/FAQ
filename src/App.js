import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import "./App.css";


import QnA from "./QnA";
import ComplainDashboard from "./component/complainDashboard";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer />
        <Switch>
          <Route exact path="/" component={QnA} />
          <Route exact path="/complaindashboard" component={ComplainDashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
