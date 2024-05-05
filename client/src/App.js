import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/users" exact element={<UserList />} />
            <Route path="/create-user" exact element={<CreateUser />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
