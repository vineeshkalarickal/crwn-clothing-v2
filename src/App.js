import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.components';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';


const Shop = () => {
  return <h1>This is to test my Shop Page</h1>
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
