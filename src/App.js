import { Route, Routes } from "react-router-dom";
import useCSSHeightListener from "./hooks/useCSSHeightListener";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MoreDetailsPage from "./pages/MoreDetails";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyPage from "./pages/PropertyPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  useCSSHeightListener({ key: '--app-height', value: window.innerHeight - 0.5 });
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/properties' element={<PropertiesPage />} />
      <Route path='/moredetails' element={<MoreDetailsPage />} />
      <Route path='/properties/:id' element={<PropertyPage />} />
    </Routes>
  )
}

export default App;