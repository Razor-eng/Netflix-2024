import React, { useEffect } from 'react';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './Page';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      } else {
        dispatch(logout());
      }
    })

    return unsubscribe;
  }, [dispatch])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route path='/' element={<Page user={user} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
