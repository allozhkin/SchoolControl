import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './RTK/store';
import Home from './pages/Home/Home';
import TestPage from './pages/Test/TestPage';
import './App.scss';
import Greetings from './pages/Greetings/Greetings';
import AdminPage from './pages/AdminPage/AdminPage';
import Header from './components/header/Header';



const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="/greetings" element={<Greetings title='Мария Мария Мария' />} />
          <Route path="/admin" element={<AdminPage chartTitle='Статистика отсутствующих в школе '/>} />
        </Routes>
      </main>
    </Router>
  </Provider>
);

export default App;
