import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAnSignUp from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";

import { auth, createUserProfileDoc } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // if a user signs in
        const userRef = await createUserProfileDoc(userAuth); // getting back a user ref

        userRef.onSnapshot((onSnapshot) => {
          this.setState({
            currentUser: {
              id: onSnapshot.id, // getting user id from our database
              ...onSnapshot.data(), // getting user data from our database
            },
          });
        });
        this.setState({ currentUser: userAuth }); // setting state for our currentUser
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* always rendered and present */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={SignInAnSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
