import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SiginInPage from "./pages/signin_page";
import SiginUpPage from "./pages/signup_page";
import ForgotPage from "./pages/forgot_page";
import VerifyPage from "./pages/verify_page";
import ResetPage from "./pages/reset_page";
import ProfilePage from "./pages/profile_page";
import Dashboard from "./pages/dashboard";
import JobDetail from "./pages/create_job/job_detail";
import JobEmploy from "./pages/create_job/job_employ";
import JobAddress from "./pages/create_job/job_address";
import WalletPage from "./pages/wallet_page";
import AddCard from "./pages/add_card";

const client = new ApolloClient({
  uri: "http://18.130.169.111:3000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={SiginInPage} />
              <Route exact path="/signup" component={SiginUpPage} />
              <Route exact path="/forgot" component={ForgotPage} />
              <Route exact path="/reset" component={ResetPage} />
              <Route exact path="/verify" component={VerifyPage} />
              <Route exact path="/profile" component={ProfilePage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/createjob_detail" component={JobDetail} />
              <Route exact path="/createjob_employ" component={JobEmploy} />
              <Route exact path="/createjob_address" component={JobAddress} />
              <Route exact path="/wallet" component={WalletPage} />
              <Route exact path="/addcard" component={AddCard} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
