import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './component/MainPage/MainPage';
import BankDetails from './component/BankDetails/BankDetails';

function App() {
  useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bankDetails" element={<BankDetails />} />
      </Routes>
    </>
  )
}

export default App;