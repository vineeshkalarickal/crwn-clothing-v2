import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './routes/home/home.components';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>This is the Navigation bar</h1>
      </div>
      <Outlet />
    </div>
  )
}
const Shop = () => {
  return <h1>This is to test my Shop Page</h1>
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
};

export default App;
