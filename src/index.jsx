import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Panel from './components/Panel'; // Import the Panel component

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Panel />  {/* Use the Panel component here */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
