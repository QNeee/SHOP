import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Layout } from './Components/Layout/Layout';
import { MainPage } from './pages/MainPage';
import { BasketPage } from './pages/BasketPage';
import { Paths } from './Helper';
import { ProfilePage } from './pages/ProfilePage';
import { CatalogPage } from './pages/CatalogPage';

function App() {
  return (
    <>
      <Routes>
        <Route path={Paths.base} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={Paths.basket} element={<BasketPage />} />
          <Route path={Paths.profile} element={<ProfilePage />} />
          <Route path={Paths.catalog} element={<CatalogPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
