import React, { useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

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
        dispatch(logout);
      }
    })

    return unsubscribe;
  }, [dispatch])


  return (
    <div>
      {
        !user ?
          <Login />
          :
          <Home />
      }
    </div>
  );
}

export default App;
