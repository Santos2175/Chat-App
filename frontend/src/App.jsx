import './App.css';
import Home from './pages/home/Home.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import { useAuthContext } from './context/AuthContext.jsx';
import MessageSkeleton from './components/skeletons/MessageSkeleton.jsx';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to={'/login'} />}></Route>
        <Route
          path='/login'
          element={authUser ? <Navigate to='/' /> : <Login />}></Route>
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <SignUp />}></Route>
        <Route path='/skeleton' element={<MessageSkeleton />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
