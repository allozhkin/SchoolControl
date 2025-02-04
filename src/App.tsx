import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './RTK/store';
import Home from './pages/Home/Home';
import TestPage from './pages/Test/TestPage';
import NavBar from './components/navBar/NavBar';
import './App.scss';
import Calendar from './components/Calendar/Calendar';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      {/* <header>
       <NavBar />
      </header> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="/Calendar" element={<Calendar />} />
        </Routes>
      </main>
    </Router>
  </Provider>
);

export default App;
