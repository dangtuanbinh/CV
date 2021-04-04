import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/Pages/Home/index";
import Project from "../src/Pages/Project/index";
import Skill from "../src/Pages/Skill/index";
import Info from "../src/Pages/Info/index";
import Contact from "../src/Pages/Contact/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Contact" component={Contact} />
          <Route path="/Info" component={Info} />
          <Route path="/Skill" component={Skill} />
          <Route path="/Project" component={Project} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
