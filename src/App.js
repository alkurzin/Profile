import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './component/MainPage/MainPage';
import BankDetailsPage from './component/BankDetailsPage/BankDetailsPage';

function App() {
  useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bankDetails" element={<BankDetailsPage />} />
      </Routes>
    </>
  )
}

export default App;