import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';


function App() {
  return (
    <div className='bg-dark min-vh-100'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* 
          Uncomment and modify the following lines as needed
          <Route path='/admin' element={<AdminGuard />}>
            <Route index element={<Admin />} />
            <Route path='login' element={<Login />} />
          </Route>
          */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
