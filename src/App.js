import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateOrder from './pages/createOrder/createOrder';
import ConfigureDoor from './pages/configureDoor/configureDoor';
import FillForm from './pages/fillForm/fillForm';
import PlaceOrder from './pages/placeOrder/placeOrder';
import SelectCategory from './pages/selectCategory/selectCategory';
import Nocarts from './pages/nocarts/nocarts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateOrder />} />
        <Route path='configureDoor' element={<ConfigureDoor />} />
        <Route path='/selectCategory' element={<SelectCategory />} />
        <Route path='/fillForm' element={<FillForm />} />
        <Route path='/placeOrder' element={<PlaceOrder />} />
        <Route path='/nocarts' element={<Nocarts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
