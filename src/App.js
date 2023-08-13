import './App.css';
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import Create from "./Pages/Create"
import { AuthContext, FirebaseContext } from './store/Context';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';

function App() {

  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    })
  })


  return (
    <div>
      <Post>
        <Router>
          <Route exact path={"/"}>
            <Home />
          </Route>
          {/* <Route path={"/signup"}>
          </Route> */}
          <Route path={"/Login"}>
            <Signin />
            <Home />
          </Route>
          <Route path={"/create"}>
            <Create />
          </Route>
          <Route path={"/item"}>
            <ViewPost />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
