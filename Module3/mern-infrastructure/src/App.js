import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { getUser } from './utilities/users-service';
import Auth from './pages/AuthPage';
import NewOrder from './pages/NewOrderPage';
import OrderHistory from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    // Check if there is a user logged in
    // If user is logged in, take them to NewOrder page
    //Otherwise, take them to Auth page
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders/new' element={<NewOrder />} />
            <Route path='/orders/' element={<OrderHistory />} />
          </Routes>
        </>
      ) : (
        <Auth setUser={setUser} />
      )}
    </main>
  );
}

export default App;
