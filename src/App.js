import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BuyPage from './pages/buy-page/BuyPage';


function App() {
  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:productId' element={<BuyPage />} />
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
