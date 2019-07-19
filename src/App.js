import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HighOrderComponent from "./components/HighOrderComponent";
import CreateExperience from "./pages/CreateExperience";
import EditExperience from "./pages/EditExperience";
import ErrorPage from "./pages/ErrorPage";
import ExpDashboard from "./pages/ExpDashboard";
import HomePage from "./pages/HomePage";
import ImageExperience from "./pages/ImageExperience";

export class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/experiences" component={HighOrderComponent(ExpDashboard)} />
          <Route exact path="/addexperience" component={HighOrderComponent(CreateExperience)} />
          <Route exact path="/addimageExperience" component={HighOrderComponent(ImageExperience)} />
          <Route exact path="/editExperience/:id" component={HighOrderComponent(EditExperience)} />
          <Route component={ErrorPage} />
        </Switch>
        {/* <HomePage /> */}
        {/* <Dashboard /> */}
      </BrowserRouter>
    )
  }
}

export default App

