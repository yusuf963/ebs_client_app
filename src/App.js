import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navigation from './components/navigation/Navigation'
import SignIn from './pages/SignIn'
import Shop from './pages/Shop'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
