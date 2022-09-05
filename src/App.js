import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import "./index.css";
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import CalendarPage from './pages/CalendarPage';
import Introduction from './pages/Introduction';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='/' element={<Introduction />} />
            <Route path='/calendar' element={<CalendarPage />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
