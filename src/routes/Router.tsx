import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Join from '../components/Join';
import ToDoPage from '../pages/ToDoPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Join />} />
        <Route path='/todo' element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
