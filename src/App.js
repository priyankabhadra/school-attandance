import React from 'react';
import './App.css';
import SchoolProject from './schoolProject';
import { Provider } from 'react-redux';
import  store  from './store/store';

function App() {
  return (
    <Provider store={store}>
      <h3>School Attandance Form</h3>
     <SchoolProject /> 
    </Provider>
  );
}

export default App;
