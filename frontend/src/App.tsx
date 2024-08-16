
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import WorkDetailsPage from './pages/WorkDetailsPage';
import AdminControlPage from './pages/AdminControlPage';
import CreateWorkPage from './pages/CreateWorkPage';


export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/control' element={<AdminControlPage/>}/>
        <Route path='/workDetails/:id' element={<WorkDetailsPage/>}/>
        <Route path='/createWork' element={<CreateWorkPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  );
}