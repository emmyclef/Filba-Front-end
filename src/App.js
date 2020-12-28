import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
      // import ReactDOM from 'react-dom';
import Routes from "./Routes/Routes";
import './App.css';
import io from 'socket.io-client';

const socket = io('localhost:3001');

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastMessage, setLastMessage] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });
    socket.on('message', data => {
      setLastMessage(data);
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  });

  const sendMessage = () => {
    socket.emit('hello!');
  }
 
  // const input = () => {
  //   socket.emit('username');
  // }

  // const routes = () => {
  //     return (
  //       <div>
  //           <Routes />
  //       </div>
  //     )
  // };

  return  (
    <div className="App">
      <div>
         <Routes />
      </div>


      <header className="App-header">
       
        <p>Connected: { '' + isConnected }</p>
        <p>Last message: { lastMessage || '-' }</p>
        <button onClick={ sendMessage }>Say hello!</button>
      </header>
    </div>
  );
}

export default App;
