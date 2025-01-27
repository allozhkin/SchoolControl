import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './RTK/store';
import Home from './pages/Home/Home';
import TestPage from './pages/Test/TestPage';

import './App.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testPage" element={<TestPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
